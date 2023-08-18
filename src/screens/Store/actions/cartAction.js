import { ADD_TO_CART , CART_ITEM_LOADING, CART_ITEM_FAIL, CART_ITEM_RESET, CART_ITEM_PAGE_CHANGE} from "../types";
import { REMOVE_FROM_CART } from "../types";
import { CART_BUTTON_LABEL } from "../types";
import { AddtoCartAPICall, getCartItemAPICall, removeCartItemAPICall } from "../../../services/apis/CartAPI";


export const cartLoadingStart = bool => ({
  type: CART_ITEM_LOADING,
  payload: bool
});


export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: item
  }
}

export const cartLoadingFail = error => ({
  type: CART_ITEM_FAIL,
  payload: error,
});

export const cartItemReset = () => ({
  type: CART_ITEM_RESET,
});

export const cartDataLPageChange = page => ({
  type: CART_ITEM_PAGE_CHANGE,
  payload: page,
});







export const removeCartItem = item => {
  return {
    type: REMOVE_FROM_CART,
    payload: item
  }
}

export const changeCartButtonLabel = label => {
  return {
    type: CART_BUTTON_LABEL,
    payload: label
  }
}


export const addItemsToCart = (product_id, qty) => {
  try {
    return async dispatch => {
      await AddtoCartAPICall(product_id, qty).
        then((response) => {
          dispatch(changeCartButtonLabel('View Cart'))
          console.log('Response Checked : ', response)
        }).
        catch((err) => { console.log('Error Checked : ', err) })
    }
  }
  catch (err) {
    console.log('error from addItemsToCart ', err)
  }

}


export const getItemsFromCart = () => {
  try {
    return async dispatch => {
      await getCartItemAPICall().
        then((response) => {
          // dispatch(changeCartButtonLabel('View Cart'))
          console.log('Response Checked : ', response?.data)
          if (response?.success) {
            dispatch(addToCart(response?.data))
          }
        }).
        catch((err) => { console.log('Error Checked : ', err) })
    }
  }
  catch (err) {
    console.log('error from getItemsFromCart ', err)
  }

}


export const removeItemsFromCart = (product_id) => {
  try {
    return async dispatch => {
      await removeCartItemAPICall(product_id).
        then((response) => {
          // dispatch(changeCartButtonLabel('View Cart'))
          console.log('Response Checked : ', response?.data)
          if (response?.success) {
            // dispatch(getItemsFromCart())
          }
        }).
        catch((err) => { console.log('Error Checked : ', err) })
    }
  }
  catch (err) {
    console.log('error from getItemsFromCart ', err)
  }

}