"use client";

import React, { useEffect, useState } from "react";
import SuggestInput from "./SuggestInput";
import { countries } from "countries-list";
import Fuse from "fuse.js";

function getSuggestion(input : string ,suggestionsList : string[]) {
    const fuse = new Fuse(suggestionsList);
    const res = fuse.search(input);
    return res.length > 0 ? res[0] : "";
}


const SearchOverlay = (props: { setter: React.Dispatch<React.SetStateAction<boolean>> }) => {


    const suggestions = Object.values(countries).map(country => country.name);
    const [searchParam, setSearchParam] = useState<string>("");
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") props.setter(false);
        //if(event.key == "Tab") event.preventDefault();
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div
            className="top-0 left-0 w-screen h-full absolute bg-white bg-opacity-70 animate-partial-fade z-[2000] flex items-center overflow-hidden"
            onClick={() => props.setter(false)} // Close overlay on background click
        >
            <SuggestInput onChange={(str) => setSearchParam(str)} suggestions={suggestions}/>
        </div>
    );
};

export default SearchOverlay;
