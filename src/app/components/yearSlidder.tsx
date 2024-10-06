import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

interface CustomMarksProps {
  min: number;
  max: number;
}

const CustomMarks: React.FC<CustomMarksProps> = ({ min, max }) => {
  const [val, setVal] = React.useState<number>(min);
  
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
  };

  return (
    <Box sx={{ width: 250, marginBottom: 2 }}>
      <Slider
        step={1} // Adjust step if needed
        value={val}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        onChange={handleChange}
        sx={{
          color: '#C0EBA6', // Slider track color
          '& .MuiSlider-thumb': {
            backgroundColor: '#347928', // Thumb color
            '&:hover': {
              backgroundColor: '#2E5B22', // Thumb color on hover (darker shade)
            },
          },
          '& .MuiSlider-track': {
            backgroundColor: '#C0EBA6', // Track color
          },
          '& .MuiSlider-rail': {
            backgroundColor: 'rgba(192, 235, 166, 0.5)', // Rail color (lighter shade)
          },
        }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="body2"
          onClick={() => setVal(min)}
          sx={{ cursor: 'pointer' }}
        >
          {min} min
        </Typography>
        <Typography
          variant="body2"
          onClick={() => setVal(max)}
          sx={{ cursor: 'pointer' }}
        >
          {max} max
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomMarks;
