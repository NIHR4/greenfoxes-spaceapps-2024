

import Image from "next/image";
import SearchOverlay from './components/SearchOverlay';
import { useMemo } from "react";
import dynamic from "next/dynamic";
import { CircularProgress } from "@mui/material";
export default function Home() {
  
  const MapComponent = useMemo(() => dynamic(
    () => import('./components/MapComponent'),
    { 
      loading: () => {
        return <div className="h-screen w-full flex justify-center items-center text-green-500">
            <CircularProgress color="inherit"/>
        </div>
      },
      ssr: false
    }
  ), [])
  
  return (
    <div className="h-screen w-full bg-white">
      <MapComponent/>
    </div>
  );
}
