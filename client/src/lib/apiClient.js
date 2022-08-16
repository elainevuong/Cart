import axios from 'axios';

const fetchProducts = async () => {
  const response = await axios.get('/api/products');
  return response.data
}

const apiClient = { fetchProducts }
export default apiClient