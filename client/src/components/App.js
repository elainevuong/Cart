import React from "react";
import axios from 'axios'

import Header from "./header/Header";
import ProductListing from "./main/ProductListing";
import AddForm from "./main/AddForm";

const App = () => {
  const handleAddToCart = async (productId, callback) => {
    await axios.post('/api/add-to-cart', { productId })
    // const data = response.data;
    // const updatedProduct = data.product;
    // const updatedItem = data.item

    let replaced = false;
    // setCart(cart.map(item => {
    //   if (item._id === updatedItem._id) {
    //     replaced = true;
    //     return updatedItem
    //   }
    //   return item
    // }))

    if (!replaced) {
      // setCart([...cart, updatedItem])
    }

    // setProducts(products.map(product => product._id === updatedProduct._id ? updatedProduct : product))

    if (callback) {
      callback()
    }
  }

  return (
    <div id="app">
      <Header />
      <main>
        <ProductListing 
          onAddToCart={handleAddToCart}
        />
        <AddForm />
      </main>
    </div>
  );
};

export default App;
