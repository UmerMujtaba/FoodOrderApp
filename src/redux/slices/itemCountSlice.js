// src/redux/slices/itemCountSlice.js
import { createSlice } from '@reduxjs/toolkit';

const itemCountSlice = createSlice({
  name: 'itemCounts',
  initialState: {},
  reducers: {
    incrementCount: (state, action) => {
      const { itemName, itemDetails } = action.payload;
      if (state[itemName]) {
        state[itemName].count += 1; // Increment existing count
      } else {
        state[itemName] = { ...itemDetails, count: 1 }; // Initialize new item with count
      }
    },
    setCount: (state, action) => {
      const { itemName, count } = action.payload;
      if (state[itemName]) {
        state[itemName].count = count; // Update existing item count
      }
    },
  },
});

// Export actions and reducer
export const { incrementCount, setCount } = itemCountSlice.actions;
export default itemCountSlice.reducer;
