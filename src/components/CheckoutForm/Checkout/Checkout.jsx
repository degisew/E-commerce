import React, { useState, useEffect } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import commerce from '../../../lib/commerce'

import styles from "./styles";

const steps = ["shipping address", "payment details"];
const Checkout = ({ cart }) => {
  const [generatedToken, setGeneratedToken] = useState(null);
  useEffect(() => {
    const token = commerce.checkout.generateToken(cart.id, {type: 'cart'});
    setGeneratedToken(token);
  }, [cart]);
    const [activeStep,setActiveStep] = useState(0);

    const Form = () =>
      activeStep === 0 ? (
        <AddressForm generatedToken={generatedToken} />
      ) : (
        <PaymentForm />
      );

    const Confirmation = () =>  (
      <div>Confirmation</div>
    )
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
        {activeStep === steps.length ? <Confirmation/> : (generatedToken && <Form/>)}
    </Paper>
  </main>
  </>
  );
};

export default Checkout;
