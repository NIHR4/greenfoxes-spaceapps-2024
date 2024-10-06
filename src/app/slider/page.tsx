'use client';
import CustomMarks from '../components/yearSlidder';
import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel } from '@mui/material';

export default function test() {
    const [selectedSlider, setSelectedSlider] = useState<number | null>(null);

    const handleSliderChange = (sliderNumber: number) => {
      setSelectedSlider(sliderNumber === selectedSlider ? null : sliderNumber);
    };
  
    return (
      <Box sx={{ padding: 2 }}>
        <FormControlLabel
          control={
            <Checkbox 
              checked={selectedSlider === 1} 
              onChange={() => handleSliderChange(1)} 
            />
          }
          label="Net"
        />
        <FormControlLabel
          control={
            <Checkbox 
              checked={selectedSlider === 2} 
              onChange={() => handleSliderChange(2)} 
            />
          }
          label="Raw"
        />
        
        {selectedSlider === 1 && <CustomMarks min={2015} max={2020} />}
        {selectedSlider === 2 && <CustomMarks min={2000} max={2022} />}
      </Box>
    );
}