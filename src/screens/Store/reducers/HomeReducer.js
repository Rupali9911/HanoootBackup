import { HOME_DATA_LOADING, HOME_DATA_SUCCESS, HOME_DATA_FAIL, UPADTE_FEATURED_CART, HOME_DATA_RESET, UPADTE_TOP_PICK_CART } from "../types";

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
            var arrUpdated = state.HomeCollection?.featuredCategoryByProductJson?.featuredCategoryByProduct?.ManagementProducts.map((item, index) => {
                if (item.id !== action.payload) {
                    return item
                }
                return {
                    ...item,
                    isCart: true
                }
            })
            return {
                ...state,
                HomeCollection: {
                    ...state.HomeCollection,
                    featuredCategoryByProductJson: {
                        ...state.HomeCollection.featuredCategoryByProductJson,
                        featuredCategoryByProduct: {
                            ...state.HomeCollection.featuredCategoryByProductJson.featuredCategoryByProduct,
                            ManagementProducts: arrUpdated
                        }
                    }
                }
            }


        case UPADTE_TOP_PICK_CART:
            var id1 = action.payload.topPicksId
            var id2 = action.payload.productId
            console.log('UPADTE_TOP_PICK_CART : ', action.payload)

            var arrFinal = state.HomeCollection?.topPicksJson?.topPicks
            var indexOfARR1 = state.HomeCollection?.topPicksJson?.topPicks.findIndex((item) => {
                item.id === id1
            })

            console.log('UPADTE_TOP_PICK_CART : ', indexOfARR1, action.payload)


        // var arrUpdated = state.HomeCollection?.topPicksJson?.topPicks[indexOfARR1]?.TopPicksProducts.map((item, index) => {
        //     if (item.id !== id2) {
        //         return item
        //     }
        //     return {
        //         ...item,
        //         isCart: true
        //     }
        // })
        // console.log('arrUpdated : ', arrUpdated)

        // arrFinal = arrFinal.map((item, index) => {
        //     if (index === indexOfARR1) {
        //         return arrUpdated
        //     }
        //     return {
        //         item
        //     }
        // })

        // return {
        //     ...state,
        //     HomeCollection: {
        //         ...state.HomeCollection,
        //         topPicksJson: {
        //             ...state.HomeCollection.topPicksJson,
        //             topPicks: arrFinal
        //         }
        //     }
        // }


        case HOME_DATA_FAIL:
            return { ...state, homeDataFail: action.payload, isLoading: false };

        case HOME_DATA_RESET:
            return state = { ...state, HomeCollection: {} };

        default:
            return state;
    }
}

export default HomeReducer;