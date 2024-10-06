"use client";
import logo from "./GreenFoxesLogo.png";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-row bg-[#FFFBE6] w-full justify-between items-center">
      <div className="flex flex-row items-center justify-between w-full  gap-x-10 px-24">
        <div className="flex flex-row items-center justify-center ">
          <Link href="/" className="flex flex-row justify-center items-center">
            <Image src={logo} alt="LogoEquipo" priority width={100} />
            <h1 className="text-[#347928] text-3xl ">Green</h1>
            <h1 className="text-[#FCCD2A] text-3xl ">Foxes</h1>
          </Link>
        </div>
        <div className="items-center justify-center align-middle pr-4">
          <nav className="flex gap-x-8 border-x-[1px] border-black px-4">
            <Link href={"/aboutUs"} className="text-xl text-[#347928] font-bold">
              About Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
