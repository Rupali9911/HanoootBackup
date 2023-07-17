import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../types";


const initialState = {
    WISHLIST_ITEMS: []
}


const wishlistReducer = (state = initialState, action) => {
    // console.log('Check reducer state and action : ', state, action)
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return {
                ...state,
                WISHLIST_ITEMS: [...state.WISHLIST_ITEMS, action.payload],
            }

        case REMOVE_FROM_WISHLIST:
            return {
                ...state, 
                WISHLIST_ITEMS: [
                    ...state.WISHLIST_ITEMS.filter(item => item.id !== action.payload.id),
                  ],
            }
        default:
            return state;
    }
}

export default wishlistReducer;