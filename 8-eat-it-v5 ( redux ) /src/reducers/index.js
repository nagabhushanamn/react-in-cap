



import { itemsReducer } from './item';
import { reviewsReducer } from './review';
import { cartReducer } from './cart';
import { combineReducers } from 'redux';


export default combineReducers({
    items: itemsReducer,
    reviews: reviewsReducer,
    cart: cartReducer
});