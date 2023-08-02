import { PRODUCT_LIST } from "../../../utility/apiUrls";
import sendRequest from "../../axios/AxiosApiRequest";


export const ProductList = (pageNumber, category_id, limit) => {
    console.log('check data : ', pageNumber, category_id, limit)
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: PRODUCT_LIST,
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