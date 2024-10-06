"use client";

import React, { useEffect, useState } from "react";
import SuggestInput from "./SuggestInput";
import L from 'leaflet';
import opencage from 'opencage-api-client';

interface SearchOverlayProps {
    setter: React.Dispatch<React.SetStateAction<boolean>>;
    mapControl: L.Map | null;
}

const SearchOverlay = (props: SearchOverlayProps) => {
    const [searchParam, setSearchParam] = useState<string>("");

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") props.setter(false);
        if (event.key === "Enter" && searchParam) {
            // Call OpenCage API for geocoding
            opencage.geocode({ q: searchParam, key: '04b14171fcb7421b96a4ba9795456e4d' })
                .then(response => {
                    if (response.results.length > 0) {
                        const { lat, lng } = response.results[0].geometry;
                        const center = new L.LatLng(lat, lng);
                        const zoom = 5;
                        props.mapControl?.setView(center, zoom);
                        props.setter(false);
                    } else {
                        console.warn("No results found for the search parameter.");
                    }
                })
                .catch(error => {
                    console.error("Error fetching geocoding data from OpenCage:", error);
                });
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [searchParam]);

    return (
        <div
            className="top-0 left-0 w-screen h-full absolute bg-white bg-opacity-70 animate-partial-fade z-[2000] flex items-center overflow-hidden"
            onClick={() => props.setter(false)}
        >
            <SuggestInput
                onChange={(str) => {
                    console.log("Updated search param: " + str);
                    setSearchParam(str);
                }}
                suggestions={[]} // OpenCage doesn't provide suggestions directly; use an external source if needed
            />
        </div>
    );
};

export default SearchOverlay;