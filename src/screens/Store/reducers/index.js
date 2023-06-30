import { combineReducers } from "redux";
import placeReducer from "./placeReducer";
import cartReducer from "./cartReducer";
import checkoutReducer from "./checkoutReducer";
import wishlistReducer from "./wishlistReducer";

const RootReducer = combineReducers({
    placeReducer,
    cartReducer,
    checkoutReducer,
    wishlistReducer
})

export default RootReducer;