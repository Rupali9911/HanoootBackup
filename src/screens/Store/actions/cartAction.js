import { ADD_TO_CART, CART_ITEM_LOADING, CART_ITEM_FAIL, CART_ITEM_RESET, CART_ITEM_PAGE_CHANGE, COUPON_LOAD_START, COUPON_LOAD_SUCCESS, COUPON_LOAD_FAIL } from "../types";
import { REMOVE_FROM_CART } from "../types";
import { CART_BUTTON_LABEL } from "../types";
import { AddtoCartAPICall, getCartItemAPICall, removeCartItemAPICall, getCouponAPICall } from "../../../services/apis/CartAPI";


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


export const couponLoadStart = bool => ({
  type: COUPON_LOAD_START,
  payload: bool
});


export const couponLoadSuccess = copon => {
  return {
    type: COUPON_LOAD_SUCCESS,
    payload: copon
  }
}

export const couponLoadFailed = error => ({
  type: COUPON_LOAD_FAIL,
  payload: error,
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
          // dispatch(changeCartButtonLabel('View Cart'))
          console.log('Response Checked : ', response)
        }).
        catch((err) => { console.log('Error Checked : ', err) })
    }
  }
  catch (err) {
    console.log('error from addItemsToCart ', err)
  }

}


export const getItemsFromCart = (page) => {
  console.log('cakled')
  try {
    return async dispatch => {
      await getCartItemAPICall(page).
        then((response) => {
          // dispatch(changeCartButtonLabel('View Cart'))
          console.log('Response Checked : ', response?.data)
          if (response?.success) {
            dispatch(addToCart(response?.data))
          }
          else {
            dispatch(addToCart(response?.data))
          }
        }).
        catch((err) => { console.log('Error Checked : ', err), dispatch(cartLoadingFail(err)) })
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
        then(async (response) => {
          console.log('Response Checked : ', response?.data)
          if (response?.success === true) {
            // dispatch(setAddressDetails(response?.data))

            await dispatch(getItemsFromCart(1))
            // dispatch(removeCartItem(product_id))

            // showInfoToast('REMOVE', response?.message)

          }
        }).


        // then((response) => {
        //   // dispatch(changeCartButtonLabel('View Cart'))
        //   console.log('Response Checked : ', response?.data)
        //   if (response?.success) {
        //     dispatch(getItemsFromCart())
        //   }
        // }).
        catch((err) => { console.log('Error Checked : ', err) })
    }
  }
  catch (err) {
    console.log('error from getItemsFromCart ', err)
  }

}



export const getCoupon = () => {
  try {
    return async dispatch => {
      await getCouponAPICall().
        then((response) => {
          if (response?.success) {
            dispatch(couponLoadSuccess(response?.data))
          }
        }).
        catch((err) => { dispatch(couponLoadFailed(err)) })
    }
  }
  catch (err) {
    console.log('error from get coupon ', err)
  }

}