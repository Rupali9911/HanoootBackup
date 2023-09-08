import { HOME_DATA_LOADING, HOME_DATA_SUCCESS, HOME_DATA_FAIL, UPADTE_FEATURED_CART, HOME_DATA_RESET } from "../types";
import { HomeDataAPICall } from "../../../services/apis/HomeAPI";


export const homeDataLoadingStart = bool => ({
    type: HOME_DATA_LOADING,
    payload: bool
});

export const homeDataSuccess = item => {
    return {
        type: HOME_DATA_SUCCESS,
        payload: item
    }
}

export const homeDataFail = error => ({
    type: HOME_DATA_FAIL,
    payload: error,
});

export const homeDataReset = () => ({
    type: HOME_DATA_RESET,
});

export const updateFeaturedCart = id => ({
    type: UPADTE_FEATURED_CART,
    payload: id,
});


export const getHomeCollection = (userData) => {
    try {
        return async dispatch => {
            await HomeDataAPICall(userData).
                then((response) => {
                    console.log('Response Checked : ', response?.data)
                    if (response?.success) {
                        dispatch(homeDataSuccess(response?.data))
                    }
                }).
                catch((err) => { console.log('Error Checked : ', err), dispatch(homeDataFail(err)) })
        }
    }
    catch (err) {
        console.log('error from Home API ', err)
        dispatch(homeDataFail(err))
    }

}
