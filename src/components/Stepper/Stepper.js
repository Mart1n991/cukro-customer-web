import { useState } from "react";
import { Box, Button, Step, StepLabel, Stepper as MaterialUIStepper, Typography } from "@mui/material";
import OrderSummary from "../orderSummary/OrderSummary";

const steps = ["Zoznam položiek", "Fakturačné údaje", "Objednávka"];

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const renderStep = () => {
    switch (activeStep) {
      case 1: {
        return (
          <>
            <Typography>Fakturačné údaje</Typography>
            <Button onClick={handleBack}>Späť</Button>
            <Button onClick={handleNext}>Pokračovať</Button>
          </>
        );
      }
      case 2: {
        return <Typography>Objednávka bola odoslaná/neodoslaná</Typography>;
      }
      default: {
        return (
          <Box mt={5}>
            <OrderSummary />
          </Box>
        );
      }
    }
  };

  return (
    <>
      <MaterialUIStepper activeStep={activeStep} alternativeLabel sx={{ maxWidth: 550, m: "0 auto" }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </MaterialUIStepper>
      {renderStep()}
    </>
  );
};

export default Stepper;
