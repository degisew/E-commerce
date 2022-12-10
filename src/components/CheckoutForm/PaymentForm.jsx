import React from 'react'
import { Typography, Button, Divider } from '@mui/material';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';

const stripePromise = loadStripe();

const PaymentForm = ({ generatedToken, setActiveStep }) => {
  return (
    <>
      <Review generatedToken={generatedToken} />
      <Divider />
      <Typography variant="h6" gutterBottom>
        Payment Method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form>
              <CardElement /> <br /> <br />
              <div>
                <Button variant="outlined" onClick={setActiveStep((prevStep) => prevStep - 1 )}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!stripe}
                  color="primary"
                >
                  Pay {generatedToken.live.subtotal.formated_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm
