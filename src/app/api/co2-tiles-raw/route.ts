import { NextResponse } from 'next/server';

const STAC_API_URL = "https://earth.gov/ghgcenter/api/stac";
const RASTER_API_URL = "https://earth.gov/ghgcenter/api/raster";
const collectionName = "odiac-ffco2-monthgrid-v2023";

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
        }>;
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
            console.error("Error fetching item count");
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

// Helper function to get items from the collection, filtered by year for December
async function getItems(year: string): Promise<Record<string, STACItem>> {
    const numberOfItems = await getItemCount(collectionName);
    const response = await fetch(`${STAC_API_URL}/collections/${collectionName}/items?limit=${numberOfItems}`);
    const data: STACResponse = await response.json();
    let items = data.features;

    // Filter items to include only those from December of the specified year
    items = items.filter(item => item.properties.start_datetime.startsWith(`${year}-12`));

    // Create a dictionary indexed by start_datetime
    const itemsDict: Record<string, STACItem> = {};
    items.forEach(item => {
        itemsDict[item.properties.start_datetime] = item;
    });

    return itemsDict;
}

// Helper function to request raster API
async function requestRasterAPI(items: Record<string, STACItem>, itemId: number): Promise<any> {
    const assetName = "co2-emissions";

    const itemKeys = Object.keys(items);
    if (itemKeys.length === 0) {
        throw new Error("No items available for the specified year.");
    }

    var rescaleValues = {
        max: items[itemKeys[itemId]].assets[assetName]["raster:bands"][0].histogram.max,
        min: items[itemKeys[itemId]].assets[assetName]["raster:bands"][0].histogram.min
    };

    const colorMap = "rainbow";

    const item = items[itemKeys[itemId]];
    const tileJsonUrl = `${RASTER_API_URL}/collections/${item.collection}/items/${item.id}/tilejson.json?` +
        `&assets=${assetName}` +
        `&color_formula=gamma+r+1.05&colormap_name=${colorMap}` +
        `&rescale=${rescaleValues.min},${rescaleValues.max}`;

    const response = await fetch(tileJsonUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch raster data for item ${itemId}`);
    }

    return await response.json();
}

// Main API handler function for CO2 flux data
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const year = searchParams.get('year') || "2022";  // Retrieve year from query parameters, defaulting to 2022

    try {
        const items = await getItems(year);
        const co2FluxData: any[] = [];

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
