"use client";

import React, { useEffect, useState } from "react";
import GhostInput from "./GhostInput";



const SearchOverlay = (props: { setter: React.Dispatch<React.SetStateAction<boolean>> }) => {


    const suggestions = [
        
    ]
    
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") props.setter(false);
        if(event.key == "Tab") event.preventDefault();
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
            <GhostInput/>
        </div>
    );
};

export default SearchOverlay;
