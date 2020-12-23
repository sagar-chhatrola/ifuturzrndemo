import { ADD_CART,UPDATE_CART } from './../type';

const authInitialState = {
    cart_list: []
};
  
  function cartReducer(state = authInitialState, action) {
    switch (action.type) {
      
      case ADD_CART:
        return { ...state, cart_list: [...state.cart_list,action.payload] };
      case UPDATE_CART:
        return { ...state, cart_list: action.payload };
    
      default:
        return state;
    }
  }

  export {cartReducer}