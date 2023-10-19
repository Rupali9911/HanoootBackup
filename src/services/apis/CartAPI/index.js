import { CART_API, COUPON_API } from "../../../utility/apiUrls";
import sendRequest from "../../axios/AxiosApiRequest";
import { showInfoToast, showErrorToast } from "../../../Components/universal/Toast";
import { Store } from "../../../screens/Store";
import { translate } from "../../../utility";

const isLanguage = Store.getState().languageReducer.selectedLanguageItem?.language_id;


export const AddtoCartAPICall = (product_id, quantity) => {
    // console.log('check product id and qty : ', product_id, quantity)
    console.log('AddtoCartAPICall : ', product_id, quantity)
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: CART_API,
            method: 'POST',
            data: {
                product_id: product_id,
                quantity: quantity
            }
        }).
            then((response) => {
                console.log('Response from Add to cart API : ', response);
                if (response?.success === true) {
                    resolve(response)

                    // showInfoToast('SUCCESS', response?.message)
                }
                else {
                    showErrorToast(translate('common.autherror'), isLanguage === 0 ? response?.message : response?.message_arabic)
                }
            }).
            catch((error) => {
                console.log('Error from Add to cart API : ', error);
                _reject(error)
                if (error?.status == 401) {
                    showErrorToast(translate('common.autherror'), '')
                }
            })
    })
}

export const getCartItemAPICall = (page) => {
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: CART_API,
            method: 'GET',
            parmas: {
                pageNumber: page,
                pageSize: 1000
            }
        }).
            then((response) => {
                console.log('Response from get cart items API : ', response);
                if (response?.success === true) {
                    resolve(response)
                }
                else {
                    // resolve(response)

                    showErrorToast(translate('common.autherror'), isLanguage === 0 ? response?.message : response?.message_arabic)
                }
            }).
            catch((error) => {
                console.log('Error from get cart items API : ', error);
                _reject(error)
            })
    })
}



export const removeCartItemAPICall = (product_id) => {
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: `${CART_API}/remove-product`,
            method: 'POST',
            data: {
                product_id: product_id
            }
        }).
            then((response) => {
                console.log('Response from remove items API : ', response);
                if (response?.success === true) {
                    resolve(response)

                    showInfoToast('REMOVE', isLanguage === 0 ? response?.message : response?.message_arabic)
                }
                else {
                    showErrorToast(translate('common.autherror'), isLanguage === 0 ? response?.message : response?.message_arabic)
                }
            }).
            catch((error) => {
                console.log('Error from remove cart items API : ', error);
                _reject(error)
            })
    })
}



export const getCouponAPICall = () => {
    console.log('coupon api called')
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: COUPON_API,
            method: 'GET',
        }).
            then((response) => {
                console.log('Response from COUPON_API : ', response);
                if (response?.success === true) {
                    resolve(response)
                }
                else {
                    showErrorToast(translate('common.autherror'), isLanguage === 0 ? response?.message : response?.message_arabic)
                }
            }).
            catch((error) => {
                console.log('Error from COUPON_API : ', error);
                _reject(error)
            })
    })
}