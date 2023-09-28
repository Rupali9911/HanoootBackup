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
            var arrUpdated = state.HomeCollection?.featuredCategoryByProductJson?.featuredCategoryByProduct?.ManagementCategory?.ManagementProducts.map((item, index) => {
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
                            ...state.HomeCollection.featuredCategoryByProductJson.featuredCategoryByProduct.ManagementCategory,
                            ManagementProducts: arrUpdated
                        }
                    }
                }
            }

        case UPADTE_TOP_PICK_CART:
            var arrFinal = state.HomeCollection?.topPicksJson?.topPicks.map((item, index) => {
                if (item?.id == action.payload.TopPicks) {
                    let topPicksProducts = item?.TopPicksProducts.map((subItem, subIndex) => {
                        if (subItem?.product_id == action.payload.ProductId) {
                            return { ...subItem, ManagementProduct: { ...subItem.ManagementProduct, isCart: true } };
                        } else {
                            return { ...subItem }
                        }
                    })
                    return { ...item, TopPicksProducts: topPicksProducts }
                } else {
                    return { ...item }
                }

            })
            console.log('Here is our final array : ', JSON.stringify(arrFinal))
            return {
                ...state,
                HomeCollection: {
                    ...state.HomeCollection,
                    topPicksJson: {
                        ...state.HomeCollection.topPicksJson,
                        topPicks: arrFinal
                    }
                }

            };

        case HOME_DATA_FAIL:
            return { ...state, homeDataFail: action.payload, isLoading: false };

        case HOME_DATA_RESET:
            return state = { ...state, HomeCollection: {} };

        default:
            return state;
    }
}

export default HomeReducer;