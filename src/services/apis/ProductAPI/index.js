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


export const ProductDetailAPICall = (id) => {
    console.log('check data : ', id)
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: `${PRODUCT_API}/detail/${id}` ,
            method: 'GET',
        }).
        then((response) => {
            console.log('Response from product detail API : ', response);
            resolve(response);
        }).
        catch((error) => {
            console.log('Error from product detail API : ', error);
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