import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'; // Import uuid for unique IDs

const generateUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  
  const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      cartItems: [],
    },
    reducers: {
      addItemToCart: (state, action) => {
        const itemWithId = { ...action.payload, id: action.payload.id || generateUniqueId() };
        const existingItem = state.cartItems.find(item => item.id === itemWithId.id);
  
        if (existingItem) {
          existingItem.quantity += itemWithId.quantity; // Increment quantity if item exists
        } else {
          state.cartItems.push({ ...itemWithId, quantity: 1 }); // Add new item
        }
      },
      removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      },
      updateQuantity: (state, action) => {
        const item = state.cartItems.find(item => item.id === action.payload.id);
        if (item) {
          item.quantity = action.payload.quantity; // Update quantity
        }
      },
      clearCart: (state) => {
        state.cartItems = []; // Clear all items from cart
      },
    },
  });
  
  export const { addItemToCart, removeFromCart, updateQuantity,clearCart } = cartSlice.actions;
  
  export default cartSlice.reducer;
  
