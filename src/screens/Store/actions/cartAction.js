import { ADD_TO_CART } from "../types";
import { REMOVE_FROM_CART } from "../types";
import { CART_LABEL } from "../types";

export const addToCart = item => {
    return {
      type: ADD_TO_CART,
      payload: item
    }
  }

export const removeCartItem = item => {
  return {
    type: REMOVE_FROM_CART,
    payload: item
  }
}

export const setCartLabel = label => {
  return {
    type: CART_LABEL,
    payload: label
  }
}