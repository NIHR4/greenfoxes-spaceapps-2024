import React from 'react';

interface GradientBoxProps {
  background?: string; // Optional background prop
}

const GradientBox: React.FC<GradientBoxProps> = ({ background }) => {
  return (
    <div style={{
      height: '5px', // Adjust thickness as needed
      background: background || 'none', // Use the passed background prop
      margin: '20px 0', // Add spacing if needed
      width:'15%',
      borderRadius: '2px', // Optional: round the corners
    }} />
  );
};

export default GradientBox;
