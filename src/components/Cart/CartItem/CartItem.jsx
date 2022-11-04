import React from "react";
import {
  Card,
  Typography,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

import styles from './styles'
const CartItem = ({ item }) => {
  return (
    <>
      <Card sx={styles.card}>
        <CardMedia
          image={item.image.url}
          title={item.name}
          sx={styles.media}
        />
        <CardContent sx={styles.cardContent}>
          <Typography variant="h5">"{item.name}"</Typography>
          <Typography variant="h6">
            "{item.line_total.formatted_with_symbol}"
          </Typography>
        </CardContent>
        <CardActions sx={styles.cardActions}>
          <div className="btn-quantity">
            <Button type="button" size="large">
              -
            </Button>
            <Typography variant='body2'>{item.quantity}</Typography>
            <Button type="buton" size="large">
              +
            </Button>
          </div>
          <Button variant="contained" type="button" color="error">
            Remove
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CartItem;
