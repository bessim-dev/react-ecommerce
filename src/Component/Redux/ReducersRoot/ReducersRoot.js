import { combineReducers } from "redux";
import UserReducer from "../User/UserReducer";
import cartReducer from "../cart/cartReducer";

export default combineReducers({
    user : UserReducer,
    cart : cartReducer
})