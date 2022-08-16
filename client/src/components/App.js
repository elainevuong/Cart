import React, { useState, useEffect } from "react";
import axios from 'axios'

import Header from "./header/Header";
import ProductListing from "./main/ProductListing";
import AddForm from "./main/AddForm";

const App = () => {
  const [ cart, setCart ] = useState([])

  useEffect(() => {
    const fetchCart = async () => {
      const response = await axios.get('/api/cart');
      const data = response.data;
      setCart(data)
    }

    fetchCart();
  }, [])

  const handleEditProduct = async (updateProduct, productId, callback) => {
    await axios.put(`/api/products/${productId}`, updateProduct)
    // const updatedProduct = response.data
    // setProducts(products.map(product => productId === product._id ? updatedProduct : product))

    // if (callback) {
    //   callback()
    // }
  }

  const handleAddToCart = async (productId, callback) => {
    const response = await axios.post('/api/add-to-cart', { productId })
    const data = response.data;
    // const updatedProduct = data.product;
    const updatedItem = data.item

    let replaced = false;
    setCart(cart.map(item => {
      if (item._id === updatedItem._id) {
        replaced = true;
        return updatedItem
      }
      return item
    }))

    if (!replaced) {
      setCart([...cart, updatedItem])
    }

    // setProducts(products.map(product => product._id === updatedProduct._id ? updatedProduct : product))

    if (callback) {
      callback()
    }
  }

  const handleCheckout = async (callback) => {
    await axios.post('/api/checkout')
    setCart([])

    if (callback) {
      callback()
    }
  }

  return (
    <div id="app">
      <Header 
        cart={cart}
        onHandleCheckout={handleCheckout}
      />
      <main>
        <ProductListing 
          onEditProduct={handleEditProduct}
          onAddToCart={handleAddToCart}
        />
        <AddForm />
      </main>
    </div>
  );
};

export default App;
