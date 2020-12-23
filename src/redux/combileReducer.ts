import {combineReducers} from 'redux';


import {productReducer} from './product/reducer';
import {cartReducer} from './cart/reducer';



export const appReducer = combineReducers({
   
    product : productReducer,
    cart : cartReducer    
    
});
