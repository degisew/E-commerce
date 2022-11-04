import React from "react";
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import styles from "./styles";
import logo from "../../assets/images/logo.png";
const NavBar = ({ totalItems }) => {
  return (
    <>
      <AppBar position="fixed" sx={styles.appBar}>
        <Toolbar sx={styles.toolBar}>
          <Typography variant="h6" sx={styles.logoTitle}>
            <img src={logo} alt="Logo" width="35px" sx={styles.image} />
            Ethio-Market
          </Typography>
          <div>
            <IconButton aria-label="show-cart-items">
              <Badge badgeContent={totalItems} color="error">
                <Link to='/cart'>
                  <ShoppingCart />
                </Link>
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
