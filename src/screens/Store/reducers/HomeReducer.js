import { HOME_DATA_LOADING, HOME_DATA_SUCCESS, HOME_DATA_FAIL, UPADTE_FEATURED_CART } from "../types";

const initialState = {
    isLoading: false,
    HomeCollection: {},
    homeDataFail: '',
}

const HomeReducer = (state = initialState, action) => {
    switch (action.type) {

        case HOME_DATA_LOADING:
            return { ...state, isLoading: true };

        case HOME_DATA_SUCCESS:
            return {
                ...state,
                HomeCollection: action.payload,
                isLoading: false,
                homeDataFail: '',
            };
        case UPADTE_FEATURED_CART:
        // var homeData = state.HomeCollection
        // var fC = homeData?.HomeCollection?.featuredCategoryByProductJson?.featuredCategoryByProduct
        // var arrProducts = homeData?.HomeCollection?.featuredCategoryByProductJson?.featuredCategoryByProduct?.ManagementProducts

        // var product = arrProducts.filter((item, index) => {
        //     return item.id === action.payload
        // })
        // var product1 = product[0]
        // product1.isCart = true
        // let index = arrProducts.indexOf(product);
        // arrProducts[index] = product1
        // // homeData?.HomeCollection?.featuredCategoryByProductJson?.featuredCategoryByProduct?.ManagementProducts = arrProducts
        // console.log('UPADTE_FEATURED_CART', arrProducts)

        // // state.HomeCollection?.featuredCategoryByProductJson?.featuredCategoryByProduct?.ManagementProducts = arrProducts
        // fC["ManagementProducts"] = arrProducts
        // return {
        //     ...state,
        //     HomeCollection: fC
        // };
        case HOME_DATA_FAIL:
            return { ...state, homeDataFail: action.payload, isLoading: false };

        default:
            return state;
    }
}

export default HomeReducer;