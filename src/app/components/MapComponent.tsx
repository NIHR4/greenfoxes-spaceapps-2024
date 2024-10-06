"use client";
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

import L from 'leaflet';
import SearchOverlay from './SearchOverlay';
import ExploreIcon from '@mui/icons-material/Explore';
import { IconButton } from '@mui/material';



// Main map component
const MapComponent: React.FC = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [tileUrl, setTileUrl] = useState<string>("");
  
  //Fetch tile data
  useEffect(() => {
    fetch("/api/co2-tiles?year=2020").then(async r => {
        let data = await r.json();
        console.log("fetched tile data: " + JSON.stringify(data))
        setTileUrl(data[0].tiles[0]);
    })
  }, [setTileUrl])



  return <>
    { isSearching ? <SearchOverlay setter={setIsSearching}/> : null }
    <MapContainer
      // key={isSearching ? 'searching' : 'not-searching'} //force re-rendering
      
      center={[0, -0.09]}
      zoom={1.5}
      maxZoom={24}
      dragging={!isSearching}
      scrollWheelZoom={!isSearching}
      doubleClickZoom={!isSearching}
      zoomControl={!isSearching}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <TileLayer
        //url="https://basemaps.cartocdn.com/rastertiles/light_only_labels/{z}/{x}/{y}@2x.png"
        opacity={0.5}
        url={tileUrl}
      />

      <div className="leaflet-bottom leaflet-left">
        <div className='leaflet-control'>
          <IconButton onClick={() => { setIsSearching(!isSearching); }}>
            <ExploreIcon sx={{ width: 48, height: 48, color: "green" }} />
          </IconButton>
        </div>
      </div>

    </MapContainer>
  </>
};

export default MapComponent;
