import { PRODUCT_DETAIL_API } from "../../../utility/apiUrls";
import sendRequest from "../../axios/AxiosApiRequest";


// export const ProductDetail = (pageNumber, category_id, limit) => {
//     console.log('check data : ', pageNumber, category_id, limit)
//     return new Promise((resolve, _reject) => {
//         sendRequest({
//             url: PRODUCT_DETAIL_API,
//             method: 'GET',
//             params: {
               
//             }
//         }).
//         then((response) => {
//             console.log('Response from product list API : ', response);
//             resolve(response);
//         }).
//         catch((error) => {
//             console.log('Error from product list API : ', error);
//             _reject(error)
//         })
//     })
// }