import React, { useState } from "react";
import { Paper, Stepper, Step, StepLabel, Typography } from "@mui/material";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";

import styles from "./styles";

const steps = ["shipping address", "payment details"];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  console.log(setActiveStep(1));
  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

  const Confirmation = () => <div>Confirmation</div>;
  return (
    <>
      <div className="spacerDiv" />
      <main>
        <Paper sx={styles.paper}>
          <Typography variant="h5" align="center" gutterBottom>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
