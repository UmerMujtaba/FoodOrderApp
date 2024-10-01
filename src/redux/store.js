import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './slices/menuSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
   
  },
});

export default store;