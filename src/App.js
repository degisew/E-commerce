import React, { useState, useEffect } from "react";
import NavBar from "./components/Navbar/NavBar";
import Products from "./components/Products/Products";
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

  // const deleteCart = async () => {
  //   commerce.cart.delete();
  // }

  //create and retrieve a cart
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  // Add item to cart
  const addToCartHandler = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };

  //Update (Increment or decrement) cart items 
  const updateCartItemQuantity = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity: quantity });
    console.log(productId, quantity);
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

  // state lifecycle method with hooks
  useEffect(() => {
    // deleteCart();
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

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
      </Routes>
    </>
  );
};

export default App;
