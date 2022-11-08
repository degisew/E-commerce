import React from "react";
import { Link } from 'react-router-dom'
import {
  Container,
  Grid,
  Typography,
  Button,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import { RemoveShoppingCart, PriceCheck } from "@mui/icons-material";
import CartItem from "./CartItem/CartItem";

import styles from './styles'

const Cart = ({ cart, updateQty, removeProduct, emptyCart }) => {

  const EmptyCart = () => (
    <Typography variant="subtitle1" align="center">
      You have no items yet,
      <Tooltip title="click to add items">
      <Link to="/" className='add-items'>start adding some!</Link>
      </Tooltip>
    </Typography>
  );
    if (!cart.line_items)
      return (
        <Typography variant="h5" sx={styles.loading}>
          <CircularProgress variant="indeterminate" />
        </Typography>
      );
  const FilledCart = () => (
    <>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <CartItem
              item={item}
              updateQty={updateQty}
              removeProduct={removeProduct}
            />
          </Grid>
        ))}
      </Grid>
      <div className="subtotal-btns-div">
      <div className="subTotal">
        <Typography variant="h5" color="black">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
      </div>
      <div className="btn-cart">
        <Button
          startIcon={<RemoveShoppingCart />}
          color="error"
          variant="contained"
          size="small"
          onClick={() => {
            emptyCart();
          }}
        >
          EMPTY CART
        </Button>
        <Button component={ Link } to="/checkout" color="primary" variant="contained" size="small" startIcon={<PriceCheck/>}>
          CHECKOUT
        </Button>
      </div>
      </div>
    </>
  );



  return (
    <>
      <Container>
        <div className="spacerDiv"></div>
        <Typography variant="h4" align="center" gutterBottom>
          Your Shopping Cart
        </Typography>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Container>
    </>
  );
};

export default Cart;
