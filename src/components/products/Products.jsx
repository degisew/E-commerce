import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";
import styles from "./styles";
const Products = ({ products}) => {
  // const products = [
  //   {
  //     id: 1,
  //     name: "shoes",
  //     price: "$50",
  //     image:
  //       "https://sp.yimg.com/ib/th?id=OP.d%2bhKdRtwJcIAOg474C474&o=5&pid=21.1",
  //     description: "This is a shoes",
  //   },
  //   {
  //     id: 2,
  //     name: "T-shirt",
  //     price: "$80",
  //     image:
  //       "https://sp.yimg.com/ib/th?id=OP.WLR17%2fJNuCk1qQ474C474&o=5&pid=21.1",
  //     description: "This is a T-shirt",
  //   },
  //   {
  //     id: 3,
  //     name: "Jacket",
  //     price: "$150",
  //     image:
  //       "https://sp.yimg.com/ib/th?id=OP.zEt4D%2bPQPSSe4w474C474&o=5&pid=21.1",
  //     description: "This is a jack",
  //   },
  // ];
  return (
    <main>
      <Grid
        sx={styles.root}
        container
        justifyContent="center"
        rowSpacing={3}
        display="flex"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
