import React from "react";
import { Container, Grid, Typography, Button, ButtonGroup } from "@mui/material";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
// console.log(cart.line_items.length)

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items yet, start adding them!
    </Typography>
  );
  const FilledCart = () => (
    <>
      <Grid container>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <CartItem item={item}/>
          </Grid>
        ))}
      </Grid>
      <div className="subTotal">
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
      </div>
      <ButtonGroup variant="contained" size="large" type="button">
        <Button color="secondary">EMPTY CART</Button>
        <Button color="primary">CHECKOUT</Button>
      </ButtonGroup>
    </>
  );

  if(!cart.line_items) return <Typography variant="h3">Loading...</Typography>;

  return (
    <>
   <Container>
      <div className="spacerDiv"></div>
      <Typography variant="h3">Your Cart</Typography>
    {!cart.line_items.length ? <EmptyCart/> : <FilledCart/> }
    </Container>
    </>
  )
};

export default Cart;
