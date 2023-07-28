import { CATEGORY_LIST_LOADING, CATEGORY_LIST_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_RESET, CATEGORY_PAGE_CHANGE, SUB_CATEGORY_LIST } from "../types";

const initialState = {

    isCatgListLoading: false,
    categoryList: [],
    categoryFailed: '',
    categoryPage: 1,
    subCategoryList: {}

}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {

        case CATEGORY_LIST_LOADING:
            return { ...state, isCatgListLoading: true };

        case CATEGORY_LIST_SUCCESS:
            return {
                ...state,
                categoryList: {
                    // ...state.categoryList,
                    ...action.payload,
                },
                isCatgListLoading: false,
            };

        case CATEGORY_LIST_FAIL:
            return {
                ...state,
                categoryFailed: action.payload,
                isCatgListLoading: false,
            };

        case CATEGORY_LIST_RESET:
            return (state = { ...state, categoryList: [] });

        case CATEGORY_PAGE_CHANGE:
            return (state = { ...state, categoryPage: action.payload });
            
        case SUB_CATEGORY_LIST:
            return {
                ...state,
                subCategoryList: {
                    ...action.payload,
                },
            };

        default:
            return state;
    }
}

export default categoryReducer;