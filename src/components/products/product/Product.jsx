import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import styles from "./styles";
const Product = ({ product }) => {
  return (
    <>
      <Card sx={styles.root}>
        <CardMedia image={product.image} title="Card-Image" sx={styles.media} />
        <CardContent>
          <CardContent sx={styles.cardContent}>
            <Typography variant="h5">{product.name}</Typography>
            <Typography variant="h5">{product.price}</Typography>
          </CardContent>
          <Typography variant="body2">{product.description}</Typography>
        </CardContent>
        <CardActions sx={styles.cardActions}>
          <IconButton aria-label="Add-to-cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
