import { PRODUCT_API, BASE_API, SEARCH_API } from "../../../utility/apiUrls";
import sendRequest from "../../axios/AxiosApiRequest";


export const ProductListAPICall = (pageNumber, category_id, limit, isNavigationSection) => {

    const URL = isNavigationSection === 'NewArrivals' ? `${PRODUCT_API}/new-arrival` : isNavigationSection === 'SuggestedProducts' ? `${PRODUCT_API}/best-for-user` : isNavigationSection === 'RecentlyViewProduct' ? `${BASE_API}/user-recent-product` : isNavigationSection === 'Search' ? `${PRODUCT_API}?search=puma` : PRODUCT_API

    let commonParam = {
        pageNumber,
        limit,
    };

    let requestParams =
        !isNavigationSection
            ? { ...commonParam, category_id }
            : commonParam

    console.log('check urlr lrsl s : ', URL, category_id, isNavigationSection, requestParams)
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: URL,
            method: 'GET',
            params: requestParams
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
    console.log('detail api param : ', id, userData)
    return new Promise((resolve, _reject) => {

        (userData
            ? sendRequest({
                url: `${PRODUCT_API}/detail/${id}`,
                method: 'GET',
            })
            : sendRequest({
                url: `${PRODUCT_API}/detail/${id}`,
                method: 'GET',
                headers: {
                    'Authorization': 'No'
                },
            })
        ).
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