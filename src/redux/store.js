import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './slices/menuSlice';
import cartReducer from './slices/cartSlice';
import recommendationReducer from './slices/recommendationSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
    recommendations: recommendationReducer,
  },
});

export default store;