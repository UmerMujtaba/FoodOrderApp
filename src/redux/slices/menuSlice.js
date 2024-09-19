import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { key } from '../../constants/key';

export const fetchMenu = createAsyncThunk('menu/fetchMenu', async () => {
    const response = await fetch(key);
    const data = await response.json();
    
    // Categorize the menu items by category
    const categorizedMenu = data.menu.reduce((acc, item) => {
      const { category } = item;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});
  
    return categorizedMenu; // Return the categorized menu object
  });
  


  const menuSlice = createSlice({
    name: 'menu',
    initialState: {
      menuItems: {}, // Store categorized menu items as an object
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchMenu.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchMenu.fulfilled, (state, action) => {
          state.menuItems = action.payload; // Store categorized data
          state.loading = false;
        })
        .addCase(fetchMenu.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message; // Handle the error appropriately
        });
    },
  });
  
  export default menuSlice.reducer;
  