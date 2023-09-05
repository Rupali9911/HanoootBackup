import { HOME_DATA_LOADING, HOME_DATA_SUCCESS, HOME_DATA_FAIL } from "../types";

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

        case HOME_DATA_FAIL:
            return { ...state, homeDataFail: action.payload, isLoading: false };

        default:
            return state;
    }
}

export default HomeReducer;