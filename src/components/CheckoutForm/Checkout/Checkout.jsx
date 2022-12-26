import React, { useState, useEffect } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
  CircularProgress,
  CssBaseline,
} from "@mui/material";
import { Link } from 'react-router-dom';
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import commerce from '../../../lib/commerce'

import styles from "./styles";

const steps = ["shipping address", "payment details"];

const Checkout = ({ cart, handleCheckout, refreshCart }) => {
  const [generatedToken, setGeneratedToken] = useState(null);
  useEffect(() => {
    const generateNewToken = async () => {
        const token = await commerce.checkout.generateToken(cart.id, { type: "cart" });
        setGeneratedToken(token);
    }
    generateNewToken();
    }, [cart]);
    
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setshippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const Form = () =>
    activeStep === 0 ? (
      <AddressForm generatedToken={generatedToken} next={next} />
    ) : (
      <PaymentForm
        generatedToken={generatedToken}
        nextStep={nextStep}
        prevStep={prevStep}
        refreshCart={refreshCart}
        timeout={timeout}
      />
    );
  let Confirmation = () =>
    isFinished ? (
      <div className="confirmation">
        <Typography variant="h5">Thank You for shopping with us!</Typography>
        <br />
        <Button component={Link} to="/" type="button" variant="outlined">
          Back to Home
        </Button>
      </div>
    ) : (
      <Typography variant="h5" sx={styles.loading} gutterBottom>
        <CircularProgress variant="indeterminate" />
      </Typography>
    );

const nextStep = () => (setActiveStep((prevState) => prevState + 1));
const prevStep = () => (setActiveStep((prevState) => prevState - 1));

  const next = (shippingFormData) => {
    setshippingData(shippingFormData);
   nextStep();
  };

const timeout = () => {
  setTimeout(() => {
    setIsFinished(true);
  }, 3000);
}

  return (
    <>
      <div className="spacerDiv" />
    <CssBaseline />
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
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            generatedToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
