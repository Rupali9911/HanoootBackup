import { ADD_TO_WISHLIST } from "../types";
import { REMOVE_FROM_WISHLIST, WISHLIST_LOADING, WISHLIST_SUCCESS, WISHLIST_FAIL, WISHLIST_RESET, WISHLIST_PAGE_CHANGE } from "../types";


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

export const wishlistLoading = bool => ({
  type: WISHLIST_LOADING,
  payload: bool
});

export const wishlistSuccess = data => ({
  type: WISHLIST_SUCCESS,
  payload: data,
});

export const wishlistFailed = error => ({
  type: WISHLIST_FAIL,
  payload: error,
});

export const wishlistReset = () => ({
  type: WISHLIST_RESET,
});

export const wishlistPageChange = page => ({
  type: WISHLIST_PAGE_CHANGE,
  payload: page,
});
