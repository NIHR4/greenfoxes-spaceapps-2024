"use client";

import React, { useEffect, useState } from "react";
import SuggestInput from "./SuggestInput";
import { countries, getCountryCode, getCountryData, TCountryCode } from "countries-list";
import L from 'leaflet';
import { feature } from "@rapideditor/country-coder"

interface SearchOverlayProps {
    setter: React.Dispatch<React.SetStateAction<boolean>>;
    mapControl: L.Map|null;
}


const SearchOverlay = (props: SearchOverlayProps) => {


    const suggestions = Object.values(countries).map(country => country.name);
    const [searchParam, setSearchParam] = useState<string>("");
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") props.setter(false);
        if (event.key === "Enter") {
            
            const code = getCountryCode(searchParam);
            console.log(searchParam);
            console.log(searchParam + ' country code: ' + code);
            console.log(JSON.stringify(feature(code as string)));
            
            const geometry = feature(code as string)?.geometry
            if(geometry == null) {
                console.warn("country code not valid");
                return;
            }
            
            const coordinates = geometry.coordinates;
            if(coordinates?.geometry !== null){
                const idx = Math.floor(coordinates[0][0].length/2)
                const center = new L.LatLng(coordinates[0][0][idx][1], coordinates[0][0][idx][0]);
                const zoom = 5;
                props.mapControl?.setView(center, zoom)
                props.setter(false);
            }else{
                console.warn("country code is not valid");
            }
            
        }
        //if(event.key == "Tab") event.preventDefault();
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [searchParam]);

    return (
        <div
            className="top-0 left-0 w-screen h-full absolute bg-white bg-opacity-70 animate-partial-fade z-[2000] flex items-center overflow-hidden"
            onClick={() => props.setter(false)} // Close overlay on background click
        >
            <SuggestInput onChange={(str) => {
                console.log("updated search param: " + str)
                setSearchParam(str)
            }} suggestions={suggestions}/>
        </div>
    );
};

export default SearchOverlay;
