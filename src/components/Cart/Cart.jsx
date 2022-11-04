import React from "react";
import { Link } from 'react-router-dom'
import {
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
  // console.log(cart.line_items.length)

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items yet, 
      <Link to='/'> 
      start adding them!
      </Link>
    </Typography>
  );
  const FilledCart = () => (
    <>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <div className="subTotal">
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
      </div>
      <div className="btn-cart">
        <Button color="secondary" variant="contained" size="large">
          EMPTY CART
        </Button>
        <Button color="primary" variant="contained" size="large">
          CHECKOUT
        </Button>
      </div>
    </>
  );

  if (!cart.line_items) return <Typography variant="h3">Loading...</Typography>;

  return (
    <>
      <Container>
        <div className="spacerDiv"></div>
        <Typography variant="h4" gutterBottom >Your Shopping Cart</Typography>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Container>
    </>
  );
};

export default Cart;
