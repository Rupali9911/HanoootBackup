import { combineReducers } from "redux";
import placeReducer from "./placeReducer";
import cartReducer from "./cartReducer";
import checkoutReducer from "./checkoutReducer";

const RootReducer = combineReducers({
    placeReducer,
    cartReducer,
    checkoutReducer
})

export default RootReducer;