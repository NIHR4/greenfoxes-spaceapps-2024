

import Image from "next/image";
import MapComponent from "./components/MapComponent"
export default function Home() {
  return (
    <div className="h-screen w-full bg-white">
      <MapComponent></MapComponent>
    </div>
  );
}
