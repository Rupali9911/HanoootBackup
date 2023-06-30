import { ADD_TO_WISHLIST } from "../types";
import { REMOVE_FROM_WISHLIST } from "../types";


export const addToWishlist = item => {
    return {
      type: ADD_TO_WISHLIST,
      payload: item
    }
  }

  export const removeWishlistItem = item => {
    return {
      type: REMOVE_FROM_WISHLIST,
      payload: item
    }
  }