'use client';
import CustomMarks from '../components/yearSlidder';
import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import GradientBox from '../components/CO2Grad'; // Ensure this path is correct

export default function test() {
    const [selectedSlider, setSelectedSlider] = useState<number | null>(null);

    const handleSliderChange = (sliderNumber: number) => {
      setSelectedSlider(sliderNumber === selectedSlider ? null : sliderNumber);
    };

    // Define gradients for each option
    const gradients = {
        net: 'linear-gradient(to right, #F7F4F9, #67001F)', // Gradient for "Net"
        raw: 'linear-gradient(to right, #000080, #800000)', // Gradient for "Raw"
    };

    return (
        <Box 
          sx={{ 
            padding: 2, 
            minHeight: '100vh' // Adjust height if needed
          }}
        >
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
          
          {/* Render the CustomMarks for "Net" slider */}
          {selectedSlider === 1 && (
            <Box sx={{ textAlign: 'center' }}>
              <CustomMarks min={2015} max={2020} />
              <Box sx={{ display: 'flex', marginTop: 0.5 }}>
                <Typography variant="body2" sx={{ width: '20px' }}>0</Typography>
                <GradientBox background={gradients.net} />
                <Typography variant="body2" sx={{ width: '20px' }}>450</Typography>
              </Box>
            </Box>
          )}
          
          {/* Render the CustomMarks and GradientBox for "Raw" slider */}
          {selectedSlider === 2 && (
            <Box sx={{ textAlign: 'center' }}>
              <CustomMarks min={2000} max={2022} />
              <Box sx={{ display: 'flex', marginTop: 0.5 }}>
                <Typography variant="body2" sx={{ width: '20px' }}>-10</Typography>
                <GradientBox background={gradients.raw} />
                <Typography variant="body2" sx={{ width: '20px' }}>60</Typography>
              </Box>
            </Box>
          )}
        </Box>
    );
}
