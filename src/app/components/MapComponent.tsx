"use client";
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import SettingsIcon from '@mui/icons-material/Settings';

import React, { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

import L from 'leaflet';
import SearchOverlay from './SearchOverlay';
import ExploreIcon from '@mui/icons-material/Explore';
import { Box, Button, Checkbox, FormControlLabel, IconButton, Modal, Typography } from '@mui/material';
import CustomMarks from './yearSlidder';
import { CheckBox } from '@mui/icons-material';
import GradientBox from './CO2Grad';
import MapSettingsModal from './MapSettingsModal';




// Main map component
const MapComponent: React.FC = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [tileUrl, setTileUrl] = useState<string>("");
  const [map, setMap] = useState<L.Map | null>(null)


  //Settings modal

  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  //Fetch tile data
  useEffect(() => {
    fetch("/api/co2-tiles?year=2020").then(async r => {
      let data = await r.json();
      console.log("fetched tile data: " + JSON.stringify(data))
      setTileUrl(data[0].tiles[0]);
    })
  }, [setTileUrl])


  const displayMap = useMemo(
    () => (
      <MapContainer
        // key={isSearching ? 'searching' : 'not-searching'} //force re-rendering
        ref={setMap}
        center={[0, 0]}
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
          opacity={0.5}
          url={tileUrl}
        />

        <div className="leaflet-bottom leaflet-left">
          <div className='leaflet-control'>
            <IconButton onClick={() => { setIsSearching(true); }}>
              <ExploreIcon sx={{ width: 48, height: 48, color: "green" }} />
            </IconButton>
          </div>
        </div>

        <div className="leaflet-top leaflet-right">
          <div className='leaflet-control leaflet-bar'>
            <button className='w-12 h-12 bg-white' onClick={(e) => handleOpen()}>
              <SettingsIcon />
            </button>
          </div>
        </div>

      </MapContainer>
    ), [tileUrl]
  )

  const [filter, setFilter] = useState<string>("net");

  //This shouldve been a provider-context 
  //architecutre but alas nobody got time
  //for that lol
  return <>
    <MapSettingsModal 
      menuOpen={open} 
      setterMenuOpen={setOpen}
      onRawYearSelectorChanged={n => {}}
      onNetYearSelectorChanged={n => {}}
      filter={filter}
      onFilterChanged={(newFilter) => setFilter(newFilter)}
    />
    {isSearching ? <SearchOverlay setter={setIsSearching} mapControl={map} /> : null}
    {displayMap}
  </>
};

export default MapComponent;
