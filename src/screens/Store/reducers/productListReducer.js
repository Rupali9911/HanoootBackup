import { PRODUCT_LIST_LOADING, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_RESET, PRODUCT_LIST_PAGE_CHANGE, PRODUCT_DETAIL_DATA_LOADING, PRODUCT_DETAIL_DATA_SUCCESS } from "../types";

const initialState = {
    isListLoading: false,
    productList: [],
    productListFail: '',
    productListPage: 1,
    productTotalCount: 0,

    //================Product Detall APIs==============

    isDetailPageLoad: false,
    productDetail: {}

}

const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_LIST_LOADING:
            return { ...state, isListLoading: true };

        case PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                productList: [...state.productList, ...action.payload.rows],
                productTotalCount: action.payload.count,
                isListLoading: false,
                productListFail: '',
            };

        case PRODUCT_LIST_FAIL:
            return { ...state, productListFail: action.payload, isListLoading: false };

        case PRODUCT_LIST_PAGE_CHANGE:
            return (state = { ...state, productListPage: action.payload });

        case PRODUCT_LIST_RESET:
            return state = { ...state, productList: [] };


        //==================Product Detail APIs==================
        case PRODUCT_DETAIL_DATA_LOADING:
            return { ...state, isDetailPageLoad: true };

        case PRODUCT_DETAIL_DATA_SUCCESS:
            return {
                ...state,
                productDetail: action.payload,
                isDetailPageLoad: false,
            };



        default:
            return state;
    }
}

export default productListReducer;