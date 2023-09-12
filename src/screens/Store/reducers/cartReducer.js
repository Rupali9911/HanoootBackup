import { ADD_TO_CART, CART_ITEM_LOADING, CART_ITEM_FAIL, CART_ITEM_RESET, CART_ITEM_PAGE_CHANGE, COUPON_LOAD_START, COUPON_LOAD_SUCCESS, COUPON_LOAD_FAIL } from "../types";
import { REMOVE_FROM_CART } from "../types";
import { CART_BUTTON_LABEL } from "../types";

const initialState = {
    isCartDataLoading: false,
    cartItems: [],
    cartData: {},
    cartItemFail: '',
    cartPageNo: 1,
    cartTotalCount: 0,


    // cartItems: [],
    cartButtonLabel: 'Add to Cart',

    isCouponLoading: false,
    couponSucess: [],
    couponFail: '',


}

const cartReducer = (state = initialState, action) => {
    // console.log('Check reducer state and action : ', state, action)
    // console.log('Check action DATA : ', [...state.cartItems, ...action.payload])


    switch (action.type) {

        case CART_ITEM_LOADING:
            return { ...state, isCartDataLoading: true };

        case ADD_TO_CART:
            console.log('Check action DATA : ', action.payload.CartProducts, state.cartItems)
            return {
                ...state,
                // cartItems: [...state.cartItems, ...action.payload.CartProducts],
                cartItems: action.payload.CartProducts,
                cartData: action.payload,
                cartTotalCount: action.payload.CartProducts?.length,
                isCartDataLoading: false,
                cartItemFail: '',
            };

        case CART_ITEM_FAIL:
            return { ...state, cartItemFail: action.payload, isCartDataLoading: false };

        case CART_ITEM_PAGE_CHANGE:
            return (state = { ...state, cartTotalCount: action.payload });

        case CART_ITEM_RESET:
            return state = { ...state, cartItems: [], cartData: {} };









        // case ADD_TO_CART:
        //     return {
        //         ...state,
        //         cartItems: [...state.cartItems, ...action.payload.CartProducts],
        //     }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: [
                    ...state.cartItems.filter(item => item.product_id !== action.payload),
                ],
            }
        case CART_BUTTON_LABEL:
            return {
                ...state,
                cartButtonLabel: action.payload
            }

        case COUPON_LOAD_START:
            return { ...state, isCouponLoading: true };

        case COUPON_LOAD_SUCCESS:
            return {
                ...state,
                couponSucess: action.payload,
                couponFail: '',
            };

        case COUPON_LOAD_FAIL:
            return { ...state, couponFail: action.payload, isCouponLoading: false };



        default:
            return state;
    }
}

export default cartReducer;