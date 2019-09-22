



import { itemsReducer } from './item';
import { reviewsReducer } from './review';
import { cartReducer } from './cart';
import { reqStatusReducer } from './req-status';


import { combineReducers } from 'redux';


export default combineReducers({
    items: itemsReducer,
    reviews: reviewsReducer,
    cart: cartReducer,
    status: reqStatusReducer
});