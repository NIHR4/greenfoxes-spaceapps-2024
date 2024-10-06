"use client";

import { useState } from "react";

export default function GhostInput() {
    const [text, setText] = useState<string>("");
    return <>
        <div className="relative ml-4 w-2/3 text-2xl md:text-7xl">
            {/* hacky but it works */}
            <input 
                placeholder={text + text}
                className="  text-black outline-none bg-transparent absolute top-0 left-0 h-auto"
                disabled={true}
            />
            <input
                autoFocus
                placeholder="Type in a country"
                className="leading-none text-black outline-none h-auto bg-transparent absolute top-0 left-0 h-auto"
                // Stop propagation for input click so it doesn't close the overlay
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => setText(e.target.value)}
            />
            

            {/* <div className="inline text-black outline-none h-auto bg-transparent absolute top-0 left-0">
                {text + text}
            </div> */}

        </div>

    </>
}