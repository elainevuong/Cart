import axios from 'axios';

const fetchProducts = async () => {
  const response = await axios.get('/api/products');
  return response.data
}

const addProduct = async (product) => {
  const response = await axios.post('/api/products', product);
  return response.data
}

const deleteProduct = async (productId) => {
  await axios.delete(`/api/products/${productId}`)
  return productId
}

const editProduct = async (productId, updateProduct) => {
  const response = await axios.put(`/api/products/${productId}`, updateProduct)
  return response.data
}

const apiClient = { fetchProducts, addProduct, deleteProduct, editProduct }
export default apiClient