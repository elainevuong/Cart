import axios from 'axios';

const fetchProducts = async () => {
  const response = await axios.get('/api/products');
  return response.data
}

const addProduct = async (product) => {
  const response = await axios.post('/api/products', product);
  return response.data
}

const apiClient = { fetchProducts, addProduct }
export default apiClient