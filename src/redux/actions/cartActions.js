import {
  ADD_CARTITEMS,
  ADD_CARTITEMS_FAIL,
  ADD_CARTITEMS_SUCCESS,
  EMPTY_CART,
} from "../actions";
import axios from "axios";

export const cartItems = (payload) => async (dispatch) => {
  dispatch({ type: ADD_CARTITEMS_SUCCESS, payload: payload });
};

export const addItem =(item)=> ({
  type:ADD_CARTITEMS,
  payload:item,
})


export const emptyCart = () => ({
  type: EMPTY_CART,
});
