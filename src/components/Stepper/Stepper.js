import { useState } from "react";
import { Button, Step, StepLabel, Stepper as MaterialUIStepper, Typography } from "@mui/material";

const steps = ["Zoznam položiek", "Fakturačné údaje"];

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  return (
    <>
      <MaterialUIStepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </MaterialUIStepper>
      {activeStep === steps.length ? (
        <>
          <Typography>Fakturačné údaje</Typography>
          <Button onClick={handleBack}>Späť</Button>
          <Button>Odoslať objednávku</Button>
        </>
      ) : (
        <>
          <Typography>Zoznam položiek</Typography>
          <Button onClick={handleNext}>Pokračovať</Button>
        </>
      )}
    </>
  );
};

export default Stepper;
