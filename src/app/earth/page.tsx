"use client";  // Ensures the component is rendered on the client side

import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls,Stars } from '@react-three/drei';
import earthImg from './earth.jpg';  // Import the image

const Earth: React.FC = () => {
  // Use the image URL from the imported object
  const earthTexture = useLoader(TextureLoader, earthImg.src);
  
  const handleMeshClick = (event: any) => {
    // Get the intersection point in world coordinates
    const point = event.point;
    
    // Calculate latitude and longitude from the point on the sphere
    const radius = Math.sqrt(point.x ** 2 + point.y ** 2 + point.z ** 2); // Sphere radius
    const latitude = (Math.asin(point.y / radius) * 180) / Math.PI; // Convert to degrees
    const longitude = (Math.atan2(point.z, point.x) * 180) / Math.PI; // Convert to degrees

    console.log(`Latitude: ${latitude.toFixed(2)}, Longitude: ${longitude.toFixed(2)}`);
  };

  return (
    <div style={{ background: 'black', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <Stars
          radius={100}        
          depth={50}           
          count={5000}         
          factor={4}           
          saturation={0}      
          fade                  
        />
        {/* Ambient lighting to illuminate the entire scene */}
        <ambientLight intensity={0.5} />

        {/* Directional light, similar to sunlight */}
        <directionalLight position={[2, 2, 5]} intensity={1} />

        {/* The mesh containing the sphere geometry and Earth texture */}
        <mesh position={[0, 0, 0]} onClick={handleMeshClick}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial map={earthTexture} />
        </mesh>

        {/* OrbitControls for rotating and zooming the view */}
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default Earth;
