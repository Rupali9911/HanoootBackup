import { TurboModuleRegistry } from "react-native";
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
        case HOME_DATA_FAIL:
            return { ...state, homeDataFail: action.payload, isLoading: false };

        default:
            return state;
    }
}

export default HomeReducer;