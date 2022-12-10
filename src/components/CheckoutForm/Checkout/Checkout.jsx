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
  console.log(generatedToken);
  useEffect(() => {
    try {
      const token = commerce.checkout.generateToken(cart.id, {type: 'cart'});
      setGeneratedToken(token);
    }catch(error) {
      console.log('There was an error in generating a token', error);
    }
  }, [cart]);
    const [activeStep,setActiveStep] = useState(0);
    const [shippingData, setshippingData] = useState({});

    const Form = () =>
      activeStep === 0 ? (
        <AddressForm generatedToken={generatedToken} next={next} />
      ) : (
        <PaymentForm generatedToken={generatedToken} setActiveStep ={setActiveStep}/>
      );

    const Confirmation = () =>  (
      <div>Confirmation</div>
    )

    const next = (shippingFormData) => {
      setshippingData(shippingFormData);
      setActiveStep((prevState) => prevState + 1);    
    }

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
