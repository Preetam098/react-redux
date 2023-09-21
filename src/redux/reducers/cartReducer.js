import {
  ADD_CARTITEMS,
  ADD_CARTITEMS_FAIL,
  ADD_CARTITEMS_SUCCESS,
  EMPTY_CART ,
} from "../actions";

const initialState = {
  loading: false,
  cartItems:[]
};


const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARTITEMS:
      return {
         ...state ,
        items :[...state.items , action.payload]};
        
      case ADD_CARTITEMS_SUCCESS:
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload ],
        };
    case ADD_CARTITEMS_FAIL:
      return { ...state, loading: false };
      case EMPTY_CART:
        return { ...state, cartItems: [] };
    default:
      return state;
  }
};

export default cartReducer;
