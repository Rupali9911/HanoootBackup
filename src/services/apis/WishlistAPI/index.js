import { WISHLIST_API } from "../../../utility/apiUrls";
import sendRequest from "../../axios/AxiosApiRequest";
import { showInfoToast, showErrorToast } from "../../../Components/universal/Toast";
import { Store } from "../../../screens/Store";
import { translate } from "../../../utility";

const isLanguage = Store.getState().languageReducer.selectedLanguageItem?.language_id;



export const addToWishlistAPICall = (id) => {
    console.log('product wishlist api call : ', id)
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: WISHLIST_API,
            method: 'POST',
            data: {
                product_id: id
            }
        }).
            then((response) => {

                console.log('Respons from wishlist API : ', response)

                if (response?.success === true) {
                    resolve(response);
                }
                else {
                    showErrorToast(translate('common.autherror'), isLanguage === 0 ? response?.message : response?.message_arabic)
                }


            }).
            catch((error) => {
                console.log('Error from WISHLIST_API : ', error);
                if (error?.status == 401) {
                    showErrorToast(translate('common.autherror'), '')
                }

                _reject(error)
            })
    })
}


export const wishlistAPICall = (pageNumber) => {

    return new Promise((resolve, _reject) => {
        sendRequest({
            url: WISHLIST_API,
            method: 'GET',
            // params: requestParams
        }).
            then((response) => {
                console.log('Response from Wishlist API Call : ', response);
                resolve(response);
            }).
            catch((error) => {
                console.log('Error from Wishlist API Call : ', error);
                _reject(error)
            })
    })
}
