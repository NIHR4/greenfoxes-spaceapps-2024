

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { CircularProgress } from "@mui/material";
export default function Application() {
  
  const MapComponent = useMemo(() => dynamic(
    () => import('../components/MapComponent'),
    { 
      loading: () => {
        return <div className="h-full w-full flex justify-center items-center text-green-500">
            <CircularProgress color="inherit"/>
        </div>
      },
      ssr: false
    }
  ), [])
  
  return (
    <div className="h-full w-full bg-white grow">
      <MapComponent/>
    </div>
  );
}
