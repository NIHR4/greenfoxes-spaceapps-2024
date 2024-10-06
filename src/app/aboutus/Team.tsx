"use client"

import { StaticImageData } from "next/image";
import Image from 'next/image';

interface TeamMembersProps{
    name: string;
    imgSrc: StaticImageData;
}


const TeamMembers : React.FC<TeamMembersProps> = ({name,imgSrc}) => {
    return (
    <div className="p-5">
        <div className=" flex flex-col justify-center">
            <div className="flex justify-center items-center rounded-2xl border-2 w-64 h-64">
                <Image 
                  src={imgSrc} 
                  alt={`${name} image`}
                  className="w-40 h-48 object-cover" 
                />
            </div>
            <div className="flex flex-col justify-between items-center p-5 text-black w-64 h-8">
                <h2 className="text-xl font-bold">{name}</h2>
            </div>
        </div>
    </div>
    );
}
export default TeamMembers;