import React, { useState, useEffect } from "react";
import NavBar from "./components/Navbar/NavBar";
import Products from "./components/Products/Products";
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
  try {
      const { data } = await commerce.products.list();
      setProducts(data);

    }catch(error) {
     if (error.name === "NetworkError") {
       console.log("There was a network error.");
     }
    }
  };

  // const deleteCart = async () => {
  //   commerce.cart.delete();
  // }

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
    try {

      const item = await commerce.cart.add(productId, quantity);
      setCart(item);
    }catch(error) {
    }
  };

  //Update (Increment or decrement) cart items 
  const updateCartItemQuantity = async (productId, quantity) => {
    try {
    const response = await commerce.cart.update(productId, { quantity: quantity });
    setCart(response);
  }catch(error) {
    }
  }

  //Delete an item from the cart
  const removeCartProduct = async (productId) => {
    try {
      const response = await commerce.cart.remove(productId);
      setCart(response);
    } catch (error) {
    }
  };

  //  make cart empty totally
  const emptyCart = async () => {
    try {
      const response = await commerce.cart.empty();
      setCart(response);
    } catch (error) {
    }
    
  }

  // state lifecycle method with hooks
  useEffect(() => {
    // deleteCart();
    fetchProducts();
    fetchCart();
  }, []);

  // console.log(cart);

  return (
    <>
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
        <Route element={<Checkout /> } path="/checkout"/>

        
      </Routes>
    </>
  );
};

export default App;
