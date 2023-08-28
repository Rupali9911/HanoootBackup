import { showErrorToast, showInfoToast } from "../../../Components/universal/Toast";
import { ORDER_API, ORDER_DETAIL_API } from "../../../utility/apiUrls";
import sendRequest from "../../axios/AxiosApiRequest";

export const OrderAPICall = (pageNumber, limit) => {
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: `${ORDER_API}/myOrders`,
            method: 'GET',
            params: {
                pageNumber: pageNumber,
                limit: limit,
            }
        }).
            then((response) => {
                console.log('RESPONSE FROM ORDER_API : ', response);
                resolve(response);
            }).
            catch((error) => {
                console.log('ERROR FROM ORDER_API : ', error);
                _reject(error)
            })
    })
}

export const OrderDetailAPICall = (orderId, productId) => {
    console.log('OrderDetailAPICall')
    console.log('RESPONSEdsfgs : ', `${ORDER_DETAIL_API}/${orderId}/${productId}`)
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: `${ORDER_DETAIL_API}/${orderId}/${productId}`,
            method: 'GET',
        }).
            then((response) => {
                console.log('RESPONSE FROM ORDER_DETAIL_API : ', response);
                resolve(response);
            }).
            catch((error) => {
                console.log('ERROR FROM ORDER_DETAIL_API : ', error);
                _reject(error)
            })
    })
}



export const PlaceOrderAPICall = (data) => {
    console.log('data checked : ', data)
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: ORDER_API,
            method: 'POST',
            data: data
        }).
            then((response) => {
                console.log('RESPONSE FROM PLACE ORDER API : ', response);
                resolve(response);

            }).
            catch((error) => {
                console.log('ERROR FROM PLACE ORDER API : ', error);
                _reject(error)
            })
    })
}


export const BuyNowAPICall = (productid, qty) => {
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: `${ORDER_API}/buyNow`,
            method: 'POST',
            data: {
                product_id: productid,
                quantity: qty
            }
        }).
            then((response) => {
                // response = {
                //     "success": true,
                //     "data": {
                //         "total_cost": 120,
                //         "total_quantity": 12,
                //         "CartProducts": [
                //             {
                //                 "ManagementProduct": 
                //                 {
                //                     "images": [
                //                         "https://m.media-amazon.com/images/I/71VnGgD-18L._AC_SX466_.jpg",
                //                         "https://m.media-amazon.com/images/I/71VnGgD-18L._AC_SX466_.jpg",
                //                         "https://m.media-amazon.com/images/I/71ulah9iIwL._AC_SX466_.jpg",
                //                         "https://m.media-amazon.com/images/I/61nZpsQlr5L._AC_SX466_.jpg",
                //                         "https://m.media-amazon.com/images/I/81NNLgQNc4L._AC_SX466_.jpg",
                //                         "https://m.media-amazon.com/images/I/91lQ8IP+OUL._AC_SX466_.jpg"
                //                     ],
                //                     "id": 10,
                //                     "title": "New Apple Watch Series 8 (GPS 41mm) Smart watch - Midnight Aluminium Case with Midnight Sport Band - Regular. Fitness Tr",
                //                     "stock": "20",
                //                     "sku": "",
                //                     "vendor": "",
                //                     "live_status": "DRAFT",
                //                     "ManagementProductPricing": {
                //                         "id": 10,
                //                         "hanooot_price": "10.00",
                //                         "hanooot_discount": null
                //                     },
                //                     "ManagementProductVariantStyle": {
                //                         "id": 10,
                //                         "variant_color": "Color: Midnight",
                //                         "variant_size": "Size: 41mm",
                //                         "variant_style": "",
                //                         "variant_model": "",
                //                         "variant_material": "",
                //                         "variant_item_package_quantity": "",
                //                         "platform": "",
                //                         "edition": "",
                //                         "lens_width": "",
                //                         "configuration": "",
                //                         "variant_book": ""
                //                     }
                //                 }
                //             }
                //         ],
                //         "deliveryDays": {
                //             "delivery": "Tue Sep 05 2023 to Thu Sep 07 2023",
                //             "city": "Baghdad",
                //             "time": "-10 0"
                //         }
                //     },
                //     "message": "Cart Review Data Get Successfully"
                // }
                console.log('RESPONSE FROM BUY NOW API : ', response);
                resolve(response);

            }).
            catch((error) => {
                console.log('ERROR FROM BUY NOW API : ', error);
                _reject(error)
            })
    })
}