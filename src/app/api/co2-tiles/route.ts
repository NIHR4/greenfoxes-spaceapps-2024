import { NextResponse } from 'next/server';

const STAC_API_URL = "https://earth.gov/ghgcenter/api/stac";
const RASTER_API_URL = "https://earth.gov/ghgcenter/api/raster";
const collection_name = "oco2-mip-co2budget-yeargrid-v1";

interface STACItem {
  properties: {
    start_datetime: string;
  };
  assets: Record<string, {
    "raster:bands": Array<{
      histogram: {
        max: number;
        min: number;
      };
    }>
  }>;
  collection: string;
  id: string;
}

interface STACResponse {
  features: STACItem[];
  context?: {
    returned: number;
  };
  links: Array<{ rel: string; href: string }>;
}

// Helper function to get item count
async function getItemCount(collectionId: string): Promise<number> {
    let count = 0;
    let itemsUrl = `${STAC_API_URL}/collections/${collectionId}/items`;

    while (true) {
        const response = await fetch(itemsUrl);

        if (!response.ok) {
            return 0; // or throw an error
        }

        const stac: STACResponse = await response.json();
        count += stac.context?.returned || 0;

        const nextLink = stac.links.find(link => link.rel === "next");
        if (!nextLink) break;

        itemsUrl = nextLink.href;
    }

    return count;
}

// Helper function to get items from the collection, optionally filtered by year
async function getItems(year?: string): Promise<Record<string, STACItem>> {
    const numberOfItems = await getItemCount(collection_name);
    const response = await fetch(`${STAC_API_URL}/collections/${collection_name}/items?limit=${numberOfItems}`);
    const data: STACResponse = await response.json();
    let items = data.features;

    // Filter items by year if a year is provided
    if (year) {
        items = items.filter(item => item.properties.start_datetime.startsWith(year));
    }

    // Create a dictionary indexed by start_datetime
    const itemsDict: Record<string, STACItem> = {};
    items.forEach(item => {
        itemsDict[item.properties.start_datetime] = item;
    });

    return itemsDict;
}

// Helper function to request raster API
async function requestRasterAPI(items: Record<string, STACItem>, itemId: number): Promise<any> {
    const assetName = "ff";

    var rescale = {
        max: items[Object.keys(items)[0]].assets[assetName]["raster:bands"][0].histogram.max,
        min: items[Object.keys(items)[0]].assets[assetName]["raster:bands"][0].histogram.min
    };

    // Hardcoded rescale values
    rescale = { max: 450, min: 0 };
    const colorMap = "purd";

    const item = items[Object.keys(items)[itemId]];
    const tileJsonUrl = `${RASTER_API_URL}/collections/${item.collection}/items/${item.id}/tilejson.json?` +
        `&assets=${assetName}` +
        `&color_formula=gamma+r+1.05&colormap_name=${colorMap}` +
        `&rescale=${rescale.min},${rescale.max}`;

    const response = await fetch(tileJsonUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch raster data for item ${itemId}`);
    }

    return await response.json();
}

// Main API handler function for CO2 flux data
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const year = searchParams.get('year') || undefined;  // Retrieve year from query parameters

    try {
        const items = await getItems(year);
        const co2FluxData = [];

        for (let i = 0; i < Object.keys(items).length; i++) {
            const co2Flux = await requestRasterAPI(items, i);
            co2FluxData.push(co2Flux);
        }

        return NextResponse.json(co2FluxData, { status: 200 });
    } catch (error) {
        console.error("Error fetching CO2 flux data:", error);
        return NextResponse.json({ error: "Error fetching CO2 flux data" }, { status: 500 });
    }
}
