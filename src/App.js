import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar/NavBar";
import Products from "./components/products/Products";
import Checkout from './components/CheckoutForm/Checkout/Checkout'
import commerce from "./lib/commerce";
import Cart from "./components/Cart/Cart";
import { Routes, Route } from "react-router-dom";

const App = () => {
  // states
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  //fetch a list of products
  const fetchProducts = async () => {
      const { data } = await commerce.products.list();
      setProducts(data);   
  };
  //create and retrieve a cart
  const fetchCart = async () => {
    try {
      const response = await commerce.cart.retrieve();
        setCart(response);
    }catch(error) {
    }
  };
  // Add item to cart
  const addToCartHandler = async (productId, quantity) => {
      const item = await commerce.cart.add(productId, quantity);
      setCart(item);
  };

  //Update (Increment or decrement) cart items 
  const updateCartItemQuantity = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity: quantity });
    setCart(response);
  }
  //Delete an item from the cart
  const removeCartProduct = async (productId) => {
      const response = await commerce.cart.remove(productId);
      setCart(response);
  };

  //  make cart empty totally
  const emptyCart = async () => {
      const response = await commerce.cart.empty();
      setCart(response);
  }

const refreshCart = async () => {
  const newCart = await commerce.cart.refresh();
  setCart(newCart);
}

  // state lifecycle method with hooks
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>
    hello
      <NavBar totalItems={cart.total_items} />
      <Routes>
        <Route
          path="/"
          element={
            <Products
              products={products}
              cart={cart}
              onAddToCart={addToCartHandler}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              products={products}
              updateQty={updateCartItemQuantity}
              removeProduct={removeCartProduct}
              emptyCart={emptyCart}
            />
          }
        />
        <Route element={
        <Checkout cart={cart} 
        refreshCart={refreshCart} 
        /> } path="/checkout"/>
      </Routes>
    </>
  );
};

export default App;