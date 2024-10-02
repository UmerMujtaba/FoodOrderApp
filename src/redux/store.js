import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/combinedReducers';

const store = configureStore({
  reducer: rootReducer, // Use the combined reducers
});


export default store;