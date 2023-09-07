import { PRODUCT_LIST_LOADING, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_RESET, PRODUCT_LIST_PAGE_CHANGE, PRODUCT_DETAIL_DATA_SUCCESS, PRODUCT_DETAIL_DATA_LOADING, PRODUCT_FILTER_BY_CATEGORY_SUCCESS, PRODUCT_DETAIL_DATA_RESET, PRODUCT_DETAIL_DATA_FAILED, PRODUCT_DETAIL_INFO_STORE, PRODUCT_BUTTON_TAPPED } from "../types";
import { ProductListAPICall, ProductDetailAPICall, ProductFilterAPICall } from "../../../services/apis/ProductAPI";
import { SEARCH_API } from '../../../utility/apiUrls';
import sendRequest from "../../../services/axios/AxiosApiRequest";

export const productListLoadingStart = bool => ({
    type: PRODUCT_LIST_LOADING,
    payload: bool
});

export const productListSuccess = data => ({
    type: PRODUCT_LIST_SUCCESS,
    payload: data,
});

export const productListFail = error => ({
    type: PRODUCT_LIST_FAIL,
    payload: error,
});

export const productListReset = () => ({
    type: PRODUCT_LIST_RESET,
});

export const productListPageChange = page => ({
    type: PRODUCT_LIST_PAGE_CHANGE,
    payload: page,
});

//=====================Product Detail API Call=================


export const productDetailReset = () => ({
    type: PRODUCT_DETAIL_DATA_RESET,
});

export const productDetailLoading = () => ({
    type: PRODUCT_DETAIL_DATA_LOADING,
    // payload: bool
});

export const productDetailDataSuccess = data => ({
    type: PRODUCT_DETAIL_DATA_SUCCESS,
    payload: data,
});

export const productDetailFailed = error => ({
    type: PRODUCT_DETAIL_DATA_FAILED,
    payload: error,
});

//=====================Product Detail filter by category API Call=================

export const productFilterByCategorySuccess = data => ({
    type: PRODUCT_FILTER_BY_CATEGORY_SUCCESS,
    payload: data,
});

//=====================Product QTY AND ID STORE=================


export const productInfoStore = data => ({
    type: PRODUCT_DETAIL_INFO_STORE,
    payload: data,
});

//=====================Product BUTTON TAPPED INFO=================


export const setTappedButtonName = bool => ({
    type: PRODUCT_BUTTON_TAPPED,
    payload: bool,
});



export const getProductList = (page, categoryId, isNavigationSection) => {
    // console.log('sdhjfs')
    // const a = getCategoryListAPI(1, 10)

    // try {
    // return async dispatch => {
    //   await categoryList(pageNum, 50).
    //     then(response => {






    //       console.log('chekc response : ', JSON.stringify(response))
    //       if (response?.data?.categories.length) {
    //         dispatch(categorySuccess(response?.data));
    //         dispatch(getSubCategoryList(response?.data?.categories[0]));
    //       }
    //     }).
    //     catch(err => {
    //       dispatch(categoryFail(err));
    //     })
    // };

    let limit = 10;
    return async dispatch => {
        await ProductListAPICall(page, categoryId, limit, isNavigationSection).
            then((response) => {
                console.log('response from product list api call : ', response)
                if (response?.data) {
                    dispatch(productListSuccess(response?.data));
                }
            }).
            catch((err) => { dispatch(productListFail(err)) })
    }

}


//=============Product Detail API Call====================


export const getProductDetail = (id, userData) => {
    try {
        return async dispatch => {

            await ProductDetailAPICall(id, userData).
                then(async (response) => {
                    // console.log('response from product detail api call : ', response)
                    if (response?.success === true) {
                        dispatch(productDetailDataSuccess(response?.data));
                        const filterResp = await ProductFilterAPICall(response?.data?.category_id);
                        console.log('filterResp : ', filterResp)
                        if (filterResp?.success === true) {
                            console.log('data from filter list resonse : ', filterResp?.data)
                            dispatch(productFilterByCategorySuccess(filterResp?.data));
                        }
                    }
                }).
                catch((err) => { console.log('sdfskhfshfkjsjkfhk'), dispatch(productDetailFailed(err)) })
        }
    }
    catch (err) {
        // console.log('Error from Product detail api', err)
        console.log('productDetail API throw error', err)
    }

    // try {
    // return async dispatch => {
    //   await categoryList(pageNum, 50).
    //     then(response => {






    //       console.log('chekc response : ', JSON.stringify(response))
    //       if (response?.data?.categories.length) {
    //         dispatch(categorySuccess(response?.data));
    //         dispatch(getSubCategoryList(response?.data?.categories[0]));
    //       }
    //     }).
    //     catch(err => {
    //       dispatch(categoryFail(err));
    //     })
    // }
    // catch (error) {
    //     console.log('Error from googleSignIn', error)
    // }

    // let limit = 10;
    // return async dispatch => {
    //     await ProductListAPICall(page, categoryId, limit).
    //         then((response) => {
    //             console.log('CHECK LENGTH OF PRODUCTLIST : ', JSON.stringify(response))
    //             if (response?.data) {
    //                 dispatch(productListSuccess(response?.data));
    //             }
    //         }).
    //         catch((err) => { dispatch(productListFail(err)) })
    // }




}


export const globalSearchAPICall = searchTxt => dispatch =>
    new Promise(async (resolve, reject) => {
        sendRequest({
            url: SEARCH_API,
            method: 'GET',
            params: {
                search: searchTxt,
            },
        })
            .then(response => {
                console.log('sdflhsldfjh : ', response)
                if (response?.success === true) {
                    resolve(response);
                }
            })
            .catch(err => {
                reject(err);
            });
    });


