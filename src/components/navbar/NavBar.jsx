import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import styles from "./styles";
import logo from "../../assets/images/logo.png";
const NavBar = ({ totalItems }) => {
  const location = useLocation();
  return (
    <>
      <AppBar position="fixed" sx={styles.appBar}>
        <Toolbar sx={styles.toolBar}>
          <Typography
            variant="h6"
            sx={styles.logoTitle}
            component={Link}
            to="/"
          >
            <img src={logo} alt="Logo" width="35px" sx={styles.image} />
            Ethio-Market
          </Typography>
          {location.pathname === "/" && (
            <div>
              <IconButton
                aria-label="show-cart-items"
                component={Link}
                to="/cart"
              >
                <Badge badgeContent={totalItems} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
