import { UPDATE_PRODUCT } from './../type';

const authInitialState = {
    product_list: []
};
  
  function productReducer(state = authInitialState, action) {
    switch (action.type) {
      case UPDATE_PRODUCT:
        return { ...state, product_list: action.payload };
    
      default:
        return state;
    }
  }

  export {productReducer}