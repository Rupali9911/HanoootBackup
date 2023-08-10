import { WISHLIST_API } from "../../../utility/apiUrls";
import sendRequest from "../../axios/AxiosApiRequest";
import { showInfoToast } from "../../../Components/universal/Toast";


export const addToWishlistAPICall = (id) => {
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: WISHLIST_API,
            method: 'POST',
            // params: {
            //     pageNumber: pageNumber,
            //     limit: limit,
            //     category_id: category_id
            // }
            data: {
                product_id: id
            }
        }).
        then((response) => {

            if(response?.success === true){

                const typeCheck = response?.message == 'product added successfully in wishlist' ? 'SUCCESS' : 'REMOVE'
                resolve(response);

            showInfoToast(typeCheck, response?.message)
            }

            
        }).
        catch((error) => {
            console.log('Error from WISHLIST_API : ', error);
            _reject(error)
        })
    })
}
