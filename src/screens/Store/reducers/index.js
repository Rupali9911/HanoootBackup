import { combineReducers } from "redux";
import placeReducer from "./placeReducer";
import cartReducer from "./cartReducer";
import checkoutReducer from "./checkoutReducer";
import wishlistReducer from "./wishlistReducer";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";

const RootReducer = combineReducers({
    userReducer,
    placeReducer,
    cartReducer,
    checkoutReducer,
    wishlistReducer,
    categoryReducer
})

export default RootReducer;