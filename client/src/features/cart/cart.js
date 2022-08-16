import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addToCart } from '../products/products';
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
    
    builder.addCase(addToCart.fulfilled, (state, action) => {
      const updatedItem = action.payload.item

      let replaced = false;

      let updatedCart = state.map(item => {
        if (item._id === updatedItem._id) {
          replaced = true;
          return updatedItem
        }
        return item
      })

      if (!replaced) {
        return state.concat(updatedItem)
      }

      return updatedCart
    })
  }
})

export default cartSlice.reducer;