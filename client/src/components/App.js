import React, { useState, useEffect } from "react";
import axios from 'axios'

import Header from "./header/Header";
import ProductListing from "./main/ProductListing";
import AddForm from "./main/AddForm";

const App = () => {
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products');
      const data = response.data;
      setProducts(data)
    }

    fetchProducts();
  }, [])

  const handleAddProduct = async (newProduct, callback) => {
    const response = await axios.post('/api/products', newProduct);
    setProducts(products.concat(response.data));
    if (callback) {
      callback()
    }
  }

  const handleDeleteProduct = async (productId) => {
    await axios.delete(`/api/products/${productId}`)
    setProducts(products.filter(product => product._id !== productId))
  }

  const handleEditProduct = async (updateProduct, productId, callback) => {
    const response = await axios.put(`/api/products/${productId}`, updateProduct)
    const updatedProduct = response.data
    setProducts(products.map(product => productId === product._id ? updatedProduct : product))

    if (callback) {
      callback()
    }
  }

  return (
    <div id="app">
      <Header />
      <main>
        <ProductListing 
          products={products}
          onDeleteProduct={handleDeleteProduct}
          onEditProduct={handleEditProduct}
        />
        <AddForm 
          onAddProduct={handleAddProduct}
        />
      </main>
    </div>
  );
};

export default App;
