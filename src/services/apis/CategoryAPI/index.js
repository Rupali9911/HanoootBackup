import { CATEGORY_LIST } from "../../../utility/apiUrls";
import sendRequest from "../../axios/AxiosApiRequest";

export const categoryList = (pageNumber, limit) => {
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: CATEGORY_LIST,
            method: 'GET',
            params: {
                pageNumber: pageNumber,
                limit: limit
            }
        })
            .then((response) => {
                console.log('Response from CATEGORY_LIST api', response)
                resolve(response)
            })
            .catch(error => {
                console.log('Error from CATEGORY_LIST api', error)
                _reject(error)
            })
    })

};