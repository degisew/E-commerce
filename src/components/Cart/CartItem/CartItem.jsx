import React from "react";
import {
  Card,
  Typography,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

import styles from "./styles";
import { Delete } from "@mui/icons-material";
const CartItem = ({ item, updateQty, removeProduct }) => {
  return (
    <>
      <Card sx={styles.card}>
        <CardMedia image={item.image.url} title={item.name} sx={styles.media} />
        <CardContent sx={styles.cardContent}>
          <Typography variant="h5">{item.name.toString()}</Typography>
          <Typography variant="h6">
            {item.line_total.formatted_with_symbol}
          </Typography>
        </CardContent>
        <CardActions sx={styles.cardActions}>
          <div className="btn-quantity">
            <Button
              type="button"
              size="large"
              onClick={() => {
                updateQty(item.id, item.quantity - 1);
              }}
            >
              -
            </Button>
            <Typography variant="body2">{item.quantity}</Typography>
            <Button
              type="buton"
              size="large"
              onClick={() => {
                updateQty(item.id, item.quantity + 1);
              }}
            >
              +
            </Button>
          </div>
          <Button
          startIcon={<Delete/>}
            variant="contained"
            type="button"
            size="small"
            color="error"
            onClick={() => {
              removeProduct(item.id);
            }}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CartItem;
