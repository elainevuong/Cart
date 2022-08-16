import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from '../../lib/apiClient'

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async() => {
    const data = await apiClient.fetchCart();
    return data
  }
)

export const checkout = createAsyncThunk(
  'cart/checkout',
  async() => {
    await apiClient.checkout();
    return
  }
)

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      return action.payload
    })
    builder.addCase(checkout.fulfilled, (state, action) => {
      return []
    })
  }
})

export default cartSlice.reducer;