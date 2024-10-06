"use client";
import logo from "./GreenFoxesLogo.png";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-row bg-[#347928] w-full justify-between items-center">
      <div className="flex flex-row items-center justify-between w-full  gap-x-10 px-24">
        <div className="flex flex-row items-center justify-center ">
          <Link href="/" className="flex flex-row justify-center items-center">
            <Image src={logo} alt="LogoEquipo" priority width={100} />
            <h1 className="text-white text-2xl">Green Foxes</h1>
          </Link>
        </div>
        <div className="items-center justify-center align-middle pr-4 text-white">
          <nav className="flex gap-x-8">
            <Link href={"/challenge"} className="text-xl">
              About the Challenge
            </Link>
            <Link href={"/aboutUs"} className="text-xl">
              About Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
