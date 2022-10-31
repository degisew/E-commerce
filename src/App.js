import React, { useState, useEffect } from "react";
import NavBar from "./components/Navbar/NavBar";
import Products from "./components/Products/Products";
import commerce from "./lib/commerce";
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
    const item = commerce.cart.add(productId, quantity);
    setCart(item);
  };
  // state lifecycle method with hooks
  useEffect(() => {
    fetchCart();
    fetchProducts();
  }, []);
  console.log(cart);
  return (
    <>
      <NavBar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={addToCartHandler} />
    </>
  );
};

export default App;
