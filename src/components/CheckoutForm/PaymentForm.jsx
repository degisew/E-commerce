import React from 'react'
import { Typography, Button, Divider } from '@mui/material';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';
import styles from './styles'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({
  generatedToken,
  refreshCart,
  nextStep,
  prevStep,
  timeout,
}) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    if (error) {
    } else {
      refreshCart();
      timeout();
      nextStep();
    }
  };
  return (
    <>
      <Review generatedToken={generatedToken} />
      <Divider />
      <Typography variant="h6" sx={styles.paymentMethod} gutterBottom>
        Payment Method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement /> <br /> <br />
              <div className="pay-btn">
                <Button variant="outlined" onClick={prevStep}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!stripe}
                  color="primary"
                >
                  Pay {generatedToken.subtotal.formatted_with_symbol}
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
