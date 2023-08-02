import { combineReducers } from "redux";
import placeReducer from "./placeReducer";
import cartReducer from "./cartReducer";
import checkoutReducer from "./checkoutReducer";
import wishlistReducer from "./wishlistReducer";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
import productListReducer from "./productListReducer";

const appReducer = combineReducers({
    userReducer,
    placeReducer,
    cartReducer,
    checkoutReducer,
    wishlistReducer,
    categoryReducer,
    productListReducer
})

const rootReducer = (state, action) => {
    console.log('root reducer called', state, action)
    if (action.type === 'AUTH_LOGOUT') {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

export default rootReducer;