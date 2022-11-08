import React from "react";
import { Grid, Typography, CircularProgress } from "@mui/material";
import Product from "./Product/Product";
import styles from "./styles";
const Products = ({ products, onAddToCart }) => {
  if (products.length === 0)
    return (
      <Typography variant="h5" sx={styles.loading}>
        <CircularProgress variant="indeterminate"/>
      </Typography>
    );
  return (
    <main>
      <Grid
        container
        sx={styles.root}
        justifyContent="center"
        display="flex"
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
