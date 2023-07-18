import { combineReducers } from "redux";
import placeReducer from "./placeReducer";
import cartReducer from "./cartReducer";
import checkoutReducer from "./checkoutReducer";
import wishlistReducer from "./wishlistReducer";
import userReducer from "./userReducer";

const RootReducer = combineReducers({
    userReducer,
    placeReducer,
    cartReducer,
    checkoutReducer,
    wishlistReducer
})

export default RootReducer;