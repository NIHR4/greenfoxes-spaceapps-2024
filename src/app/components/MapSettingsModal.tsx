import { Box, Button, Checkbox, FormControlLabel, IconButton, Modal, Typography } from '@mui/material';
import GradientBox from './CO2Grad';
import CustomMarks from './yearSlidder';
import React, { useState } from 'react';
import { unmountComponentAtNode } from '@react-three/fiber';

interface SettingsProps {
    menuOpen: boolean
    setterMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onRawYearSelectorChanged: (n : number) => void;
    onNetYearSelectorChanged: (n : number) => void;
    onFilterChanged: (filter : string) => void;
    filter : string;
}


export default function MapSettingsModal(props : SettingsProps) {
    let initialFilter = null;
    if(props.filter == 'net') initialFilter = 1;
    else if(props.filter == 'raw') initialFilter = 2;
    
    const [selectedSlider, setSelectedSlider] = useState<number | null>(initialFilter);
    const [rawYear, setRawYear] = useState<number>(2020);
    const [netYear, setNetYear] = useState<number>(2020);

    const handleSliderChange = (sliderNumber: number) => {
        if(sliderNumber == 1)props.onFilterChanged("net");
        if(sliderNumber == 2)props.onFilterChanged("raw");
        setSelectedSlider(sliderNumber === selectedSlider ? null : sliderNumber);
    };

    // Define gradients for each option
    const gradients = {
        net: 'linear-gradient(to right, #F7F4F9, #67001F)', // Gradient for "Net"
        raw: 'linear-gradient(to right, #000080, #800000)', // Gradient for "Raw"
    };


    const handleClose = () => {
        props.setterMenuOpen(false);
        props.onNetYearSelectorChanged(netYear);
        props.onRawYearSelectorChanged(rawYear);
        
    };


    return <>
        <Modal
            open={props.menuOpen}
            onClose={handleClose}
        >
            {
                <Box
                    sx={{
                        padding: 2,
                        minHeight: '100vh', // Adjust height if needed
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <div className='bg-white p-8 h-full'>
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
                            <Box sx={{ textAlign: 'center', width: "100%" }}>
                                <CustomMarks min={2015} max={2020} onValueChange={v => {setNetYear(v)}} />
                                <Box sx={{ display: 'flex', marginTop: 0.5 }}>
                                    <Typography variant="body2" sx={{ width: '20px' }}>0</Typography>
                                    <GradientBox background={gradients.net}/>
                                    <Typography variant="body2" sx={{ width: '20px' }}>450</Typography>
                                </Box>
                            </Box>
                        )}

                        {/* Render the CustomMarks and GradientBox for "Raw" slider */}
                        {selectedSlider === 2 && (
                            <Box sx={{ textAlign: 'center', width: "100%" }}>
                                <CustomMarks min={2000} max={2022} onValueChange={v => {setRawYear(v)}}/>
                                <Box sx={{ display: 'flex', marginTop: 0.5 }}>
                                    <Typography variant="body2" sx={{ width: '20px' }}>-10</Typography>
                                    <GradientBox background={gradients.raw} />
                                    <Typography variant="body2" sx={{ width: '20px' }}>60</Typography>
                                </Box>
                            </Box>
                        )}
                        <Button onClick={handleClose}>Ok</Button>
                    </div>
                </Box>
            }
        </Modal>


    </>
}