import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, WISHLIST_LOADING, WISHLIST_SUCCESS, WISHLIST_FAIL, WISHLIST_RESET, WISHLIST_PAGE_CHANGE } from "../types";


const initialState = {
    isWishlistLoading: false,
    wishlistItems: [],
    wishlistFailed: '',
    wishlistPageChange: 1,
    wishlistTotal: 0,
}


const wishlistReducer = (state = initialState, action) => {
    // console.log('Check reducer state and action : ', state, action)
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return {
                ...state,
                // WISHLIST_ITEMS: [...state.WISHLIST_ITEMS, action.payload],
            }

        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                WISHLIST_ITEMS: [
                    // ...state.WISHLIST_ITEMS.filter(item => item.id !== action.payload.id),
                ],
            }

        case WISHLIST_LOADING:
            return { ...state, isWishlistLoading: true };

        case WISHLIST_SUCCESS:
            return {
                ...state,
                wishlistItems: [...state.wishlistItems, ...action.payload],
                // productTotalCount: action.payload.count,
                isWishlistLoading: false,
                wishlistFailed: '',
            };

        case WISHLIST_FAIL:
            return { ...state, wishlistFailed: action.payload, isWishlistLoading: false };


        case WISHLIST_PAGE_CHANGE:
            return (state = { ...state, wishlistPageChange: action.payload });

        case WISHLIST_RESET:
            return state = { ...state, wishlistItems: [] };
        default:
            return state;
    }
}

export default wishlistReducer;