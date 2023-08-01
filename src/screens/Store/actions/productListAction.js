import { PRODUCT_LIST_LOADING, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_RESET, PRODUCT_LIST_PAGE_CHANGE } from "../types";
import { ProductList } from "../../../services/apis/ProductListAPI";

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
        await ProductList(page, categoryId, limit).
            then((response) => {
                // console.log('this is response : ', response)
                if (response?.data) {
                    dispatch(productListSuccess(response));
                }
            }).
            catch((err) => { dispatch(productListFail(err)) })
    }

}