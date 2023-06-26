import { ADD_TO_CART } from "../types";
import { REMOVE_FROM_CART } from "../types";
import { CART_LABEL } from "../types";

const initialState = {
    cartItems: [],
    cartLabel: 'Add to Cart'
}

const cartReducer = (state = initialState, action) => {
    // console.log('Check reducer state and action : ', state, action)
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            }
        case REMOVE_FROM_CART:
            return {
                ...state, 
                cartItems: [
                    ...state.cartItems.filter(item => item.id !== action.payload.id),
                  ],
            }
        case CART_LABEL:
            return {
                ...state, 
                cartLabel: action.payload
            }
        default:
            return state;
    }
}

export default cartReducer;