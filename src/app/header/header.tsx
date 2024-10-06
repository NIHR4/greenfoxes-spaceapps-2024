"use client";
import logo from "./GreenFoxesLogo.png"
import Link from "next/link"
import Image from "next/image"


export default function Header(){
    return (
        <header>
            <div className="flex flex-row justify-between items-center gap-x-10 bg-[#347928] w-full">
                <div className="flex items-center justify-center ">
                    <Link href="/">
                        <Image 
                            src={logo}
                            alt="LogoEquipo"
                            priority
                            width={100}
                            
                        />
                    </Link>
                    <h1 className="text-white text-2xl">Green Foxes</h1>
                </div>
                <div className="items-center justify-center align-middle pr-4 text-white">
                    <nav className="flex gap-x-4">
                    <Link 
                        href={"/challenge"}
                        >About the Challenge</Link>
                        <Link 
                        href={"/aboutUs"}
                        >About Us</Link>

                    </nav>
                </div>
            </div>
        </header>
    )
}