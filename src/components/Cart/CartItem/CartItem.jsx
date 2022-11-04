import React from "react";
import {
  Card,
  Typography,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
const CartItem = ({ item }) => {
  return (
    <>
      <Card>
        <CardMedia image={item.image.url} alt={item.name} />
        <CardContent>
          <Typography variant="h4">"{item.name}"</Typography>
          <Typography variant="h5">
            "{item.line_total.formatted_with_symbol}"
          </Typography>
        </CardContent>
        <CardActions>
          <div>
            <Button type="button" size="small">
              -
            </Button>
            <Typography>{item.quantity}</Typography>
            <Button type="buton" size="small">
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
