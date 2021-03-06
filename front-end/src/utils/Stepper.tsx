import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import {useTheme} from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {IconButton} from "@mui/material";
import {Download} from "@mui/icons-material";
import {StepperProps} from "../types";
import * as htmlToImage from "html-to-image";

// https://mui.com/material-ui/react-stepper/#main-content

export function Stepper({size, steps}: StepperProps) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = steps.length;
    const themeColor = '#90caf9';

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // download button onclick handler
    const onClickButton = () => {
        const node = document.getElementById('wireframe');

        if (node) {
            htmlToImage
                .toPng(node, {backgroundColor: 'white'})
                .then(url => {
                    const element = document.createElement('a');
                    element.download = 'wireframe.png';
                    element.href = url;
                    element.click();
                });
        }
    }

    return (
        <Box sx={{width: size, flexGrow: 1, border: `1px solid ${themeColor}`}}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: themeColor,
                    color: 'white',
                    fontWeight: 'bold',
                }}
            >
                <Typography>{steps[activeStep].label}</Typography>
                <IconButton
                    sx={{marginLeft: 'auto', color: 'white'}}
                    component="button"
                    onClick={onClickButton}
                >
                    <Download/>
                </IconButton>
            </Paper>
            <Box sx={{
                width: size,
                height: size,
                borderBottom: `1px solid ${themeColor}`
                }}
            >
                {steps[activeStep].description}
            </Box>
            <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft/>
                        ) : (
                            <KeyboardArrowRight/>
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight/>
                        ) : (
                            <KeyboardArrowLeft/>
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}
