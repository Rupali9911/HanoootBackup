import { CART_API } from "../../../utility/apiUrls";
import sendRequest from "../../axios/AxiosApiRequest";
import { showInfoToast, showErrorToast } from "../../../Components/universal/Toast";

export const AddtoCartAPICall = (product_id, quantity) => {
    console.log('check product id and qty : ', product_id, quantity)
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
            else{
                showErrorToast('Auth Error', response?.message)
            }
        }).
        catch((error) => {
            console.log('Error from Add to cart API : ', error);
            _reject(error)
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
            else{
                showErrorToast('Auth Error', response?.message)
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

                showInfoToast('REMOVE', response?.message)
            }
            else{
                showErrorToast('Auth Error', response?.message)
            }
        }).
        catch((error) => {
            console.log('Error from remove cart items API : ', error);
            _reject(error)
        })
    })
}