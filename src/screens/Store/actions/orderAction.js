import { ORDER_LIST_LOADING, ORDER_LIST_SUCCESS, ORDER_LIST_FAIL, ORDER_LIST_RESET, ORDER_LIST_PAGE_CHANGE , ORDER_DETAIL_DATA_LOADING, ORDER_DETAIL_SUCCESS, ORDER_DETAIL_FAIL, ORDER_DETAIL_RESET, BUY_NOW_LIST_LOADING, BUY_NOW_LIST_SUCCESS, BUY_NOW_LIST_FAIL} from "../types";
import { OrderAPICall, OrderDetailAPICall, BuyNowAPICall } from "../../../services/apis/OrdersAPI";
import { showErrorToast } from "../../../Components/universal/Toast";

export const orderListLoadingStart = bool => ({
    type: ORDER_LIST_LOADING,
    payload: bool
});

export const orderListSuccess = data => ({
    type: ORDER_LIST_SUCCESS,
    payload: data,
});

export const orderListFail = error => ({
    type: ORDER_LIST_FAIL,
    payload: error,
});

export const orderListReset = () => ({
    type: ORDER_LIST_RESET,
});

export const orderListPageChange = page => ({
    type: ORDER_LIST_PAGE_CHANGE,
    payload: page,
});

///////////////Detail/////////////////

export const orderDetailLoadingStart = bool => ({
    type: ORDER_DETAIL_DATA_LOADING,
    payload: bool
});

export const orderDetailSuccess = data => ({
    type: ORDER_DETAIL_SUCCESS,
    payload: data,
});

export const orderDetailFail = error => ({
    type: ORDER_DETAIL_FAIL,
    payload: error,
});

export const orderDetailReset = () => ({
    type: ORDER_DETAIL_RESET,
});


export const buyNowLoading = bool => ({
    type: BUY_NOW_LIST_LOADING,
    payload: bool
});

export const buyNowSuccess = data => ({
    type: BUY_NOW_LIST_SUCCESS,
    payload: data,
});

export const buyNowFail = error => ({
    type: BUY_NOW_LIST_FAIL,
    payload: error,
});



export const getOrderList = (page) => {
    let limit = 25;
    return async dispatch => {
        await OrderAPICall(page, limit).
            then((response) => {
                if (response?.success) {
                    
                    dispatch(orderListSuccess(response?.data));
                }
                else{
                    showErrorToast('Auth Error')
                }
            }).
            catch((err) => { dispatch(orderListFail(err)) })
    }

}


export const getOrderDetail = (orderId, productId) => {
    console.log('getOrderDetail')
    return async dispatch => {
        await OrderDetailAPICall(orderId, productId).
            then((response) => {
                if (response?.success) {
                    
                    dispatch(orderDetailSuccess(response?.data));
                }
                else{
                    showErrorToast('Auth Error')
                }
            }).
            catch((err) => { dispatch(orderDetailFail(err)) })
    }
}



export const getBuyNowData = (productid, qty) => {
    console.log('skdhflsdhflsdjfkls', productid, qty)
    return async dispatch => {
        await BuyNowAPICall(productid, qty).
            then((response) => {
                if (response?.success) {
                    
                    dispatch(buyNowSuccess(response?.data));
                }
                else{
                    showErrorToast('Auth Error')
                }
            }).
            catch((err) => { dispatch(buyNowFail(err)) })
    }

}
