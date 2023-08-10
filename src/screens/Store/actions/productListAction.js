import { PRODUCT_LIST_LOADING, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_RESET, PRODUCT_LIST_PAGE_CHANGE, PRODUCT_DETAIL_DATA_SUCCESS, PRODUCT_DETAIL_DATA_LOADING } from "../types";
import { ProductListAPICall, ProductDetailAPICall } from "../../../services/apis/ProductAPI";

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

export const productDetailLoading = () => ({
    type: PRODUCT_DETAIL_DATA_LOADING,
    // payload: bool
});

export const productDetailDataSuccess = data => ({
    type: PRODUCT_DETAIL_DATA_SUCCESS,
    payload: data,
});


export const getProductList = (page, categoryId) => {
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
        await ProductListAPICall(page, categoryId, limit).
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


export const getProductDetail = (id) => {
    try {
        return async dispatch => {
            dispatch(productDetailLoading())
            await ProductDetailAPICall(id).
                then((response) => {
                    // console.log('response from product detail api call : ', response)
                    if (response?.success === true) {
                        dispatch(productDetailDataSuccess(response?.data));
                    }
                }).
                catch((err) => { console.log('error from product list api ', err) })
        }
    }
    catch (err) {
        console.log('Error from Product detail api', err)
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


