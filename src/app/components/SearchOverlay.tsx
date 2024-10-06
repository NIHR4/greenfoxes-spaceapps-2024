"use client";

import React, { useEffect } from "react";

const SearchOverlay = (props: { setter: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") props.setter(false);
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div
            className="top-0 left-0 w-screen h-full absolute bg-white bg-opacity-70 animate-partial-fade z-[2000] flex items-center"
            onClick={() => props.setter(false)} // Close overlay on background click
        >
            <input
                placeholder="Type in a country"
                className="w-2/3 h-auto text-7xl pl-4 text-black relative outline-none bg-transparent z-[2001]"
                // Stop propagation for input click so it doesn't close the overlay
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
};

export default SearchOverlay;
