import { CATEGORY_LIST, PARENT_CATEGORY_API, SUB_CATEGORY_API } from "../../../utility/apiUrls";
import sendRequest from "../../axios/AxiosApiRequest";

// export const categoryList = (pageNumber, limit) => {
//     console.log('pageNumber & limit', pageNumber, limit)
//     return new Promise((resolve, _reject) => {
//         sendRequest({
//             url: CATEGORY_LIST,
//             method: 'GET',
//             params: {
//                 pageNumber: pageNumber,
//                 limit: limit
//             }
//         })
//             .then((response) => {
//                 console.log('Response from CATEGORY_LIST api', response.data.categories.rows.length)
//                 resolve(response)
//             })
//             .catch(error => {
//                 console.log('Error from CATEGORY_LIST api', error)
//                 _reject(error)
//             })
//     })

// };


export const categoryListAPI = (pageNumber, limit) => {
    console.log('pageNumber & limit', pageNumber, limit)
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: PARENT_CATEGORY_API,
            method: 'GET',
            params: {
                pageNumber: pageNumber,
                limit: limit
            }
        })
            .then((response) => {
                console.log('Response from CATEGORY_LIST api', response.data)
                resolve(response)
            })
            .catch(error => {
                console.log('Error from CATEGORY_LIST api', error)
                _reject(error)
            })
    })
};


export const subCategoryListAPI = (id) => {
    console.log('check api id: ', id)
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: SUB_CATEGORY_API,
            method: 'GET',
            params: {
                id: id
            }
        })
            .then((response) => {
                console.log('Response from SUB_CATEGORY_API api', response.data)
                resolve(response)
            })
            .catch(error => {
                console.log('Error from SUB_CATEGORY_API api', error)
                _reject(error)
            })
    })

};