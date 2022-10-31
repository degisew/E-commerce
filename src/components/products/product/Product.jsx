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
const Product = ({ product, onAddToCart }) => {
//  console.log(product);
  return (
    <>
      <Card sx={styles.root}>
        <CardMedia
          image={product.image.url}
          title="Card-Image"
          sx={styles.media}
        />
        <CardContent>
          <CardContent sx={styles.cardContent}>
            <Typography variant="h5">{product.name}</Typography>
            <Typography variant="h5">
              {product.price.formatted_with_symbol}
            </Typography>
          </CardContent>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
           color='rgb(99, 91, 91)'
          />
        </CardContent>
        <CardActions sx={styles.cardActions}>
          <IconButton aria-label="Add-to-cart" onClick={() => {
            onAddToCart(product.id, 1)}}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
