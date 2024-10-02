// src/redux/rootReducer.js
import { combineReducers } from 'redux';
import menuReducer from '../slices/menuSlice'; // Assuming you have a menu slice
import itemCountReducer from '../slices/itemCountSlice'; // Import your item count slice
import cartReducer from '../slices/cartSlice';
import recommendationReducer from '../slices/recommendationSlice';

const rootReducer = combineReducers({
    menu: menuReducer,
    cart: cartReducer,
    recommendations: recommendationReducer,
    itemCounts: itemCountReducer, // Add the item count reducer
});

export default rootReducer;
