import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from '../../lib/apiClient'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async() => {
    const data = await apiClient.fetchProducts();
    return data
  }
)

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (args) => {
    const { callback, product } = args
    const newProduct = await apiClient.addProduct(product);
    if (callback) {
      callback()
    }
    return newProduct;
  }
)

export const deleteProduct = createAsyncThunk( 
  'products/deleteProduct',
  async (productId) => {
    await apiClient.deleteProduct(productId)
    return productId
  }
)

const initialState = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload
    })
    builder.addCase(addProduct.fulfilled, (state, action) => {
      const newProduct = action.payload
      return state.concat(newProduct)
    })
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const productId = action.payload
      return state.filter(product => product._id !== productId)
    })
  }
})

export default productsSlice.reducer;