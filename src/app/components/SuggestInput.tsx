"use client";

import Fuse from "fuse.js";
import { useState } from "react";

interface InputProps {
    onChange: (str : string) => void;
    suggestions: string[];
}


export default function SuggestInput(props: InputProps) {
    const [text, setText] = useState<string>("");
    const [suggestedText, setSuggestedText] = useState<string>("");
    const fuse = new Fuse(props.suggestions);

    const handleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        
        const newValue = e.target.value;
        const res = fuse.search(newValue);
        if(res.length > 0 && res[0].item.startsWith(newValue)) {
            console.log("suggesting " + res[0].item + " for " + text)
            
            setSuggestedText(res[0].item)
        }else{
            setSuggestedText("");
        }
        
        
        setText(newValue);
        props.onChange(newValue);
        
    }

    const handleKeyDown = (e : React.KeyboardEvent<HTMLInputElement>) => {
        console.log("key down event handled");
        
        if(e.key == "Tab") {
            e.preventDefault();
            const res = fuse.search(e.currentTarget.value);
            if(res.length > 0) {
                setSuggestedText("");
                setText(res[0].item);
            }else{
                
            }
            //return res.length > 0 ? res[0] : "";
        }
    };

    return <>
        <div className="relative ml-4 w-2/3 text-2xl md:text-7xl">
            {/* hacky but it works */}
            <input 
                className=" text-black outline-none bg-transparent absolute top-0 left-0 h-auto"
                disabled={true}
                placeholder={suggestedText}
            />
            <input
                autoFocus
                placeholder="Type in a country"
                className="leading-none text-black outline-none h-auto bg-transparent absolute top-0 left-0 h-auto"
                // Stop propagation for input click so it doesn't close the overlay
                onClick={(e) => e.stopPropagation()}
                onKeyDown={handleKeyDown}
                onChange={handleInput}
                value={text}
            />
            

            {/* <div className="inline text-black outline-none h-auto bg-transparent absolute top-0 left-0">
                {text + text}
            </div> */}

        </div>

    </>
}