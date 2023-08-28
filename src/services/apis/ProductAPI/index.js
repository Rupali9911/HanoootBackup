import { PRODUCT_API } from "../../../utility/apiUrls";
import sendRequest from "../../axios/AxiosApiRequest";


export const ProductListAPICall = (pageNumber, category_id, limit) => {
    // console.log('check data : ', pageNumber, category_id, limit)
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: PRODUCT_API,
            method: 'GET',
            params: {
                pageNumber: pageNumber,
                limit: limit,
                category_id: category_id
            }
        }).
        then((response) => {
            console.log('Response from product list API : ', response);
            resolve(response);
        }).
        catch((error) => {
            console.log('Error from product list API : ', error);
            _reject(error)
        })
    })
}


export const ProductDetailAPICall = (id, userData) => {
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: `${PRODUCT_API}/detail/${id}` ,
            method: 'GET',
            headers: {
                'Authorization': !userData && 'No'
            },
        }).
        then((response) => {
            console.log('Response Product Detail API : ', response);
            resolve(response);
        }).
        catch((error) => {
            console.log('Error Product Detail API : ', error);
            _reject(error)
        })
    })
}


export const ProductFilterAPICall = (category_id) => {
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: `${PRODUCT_API}/filter`,
            method: 'GET',
            params: {
                category_id: category_id
            }
        }).
        then((response) => {
            console.log('Response from product Filter API : ', response);
            resolve(response);
        }).
        catch((error) => {
            console.log('Error from product Filter API : ', error);
            _reject(error)
        })
    })
}