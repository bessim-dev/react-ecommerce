import {addItemToCart} from "./cartUtils"
const INITIAL_STATE = {
    Hidden : true,
    cartItems :[] 
}
const cartReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case "TOGGLE_HIDE":
            return {
                ...state,
                Hidden: !state.Hidden
            }
        case "ADD_ITEM" : 
            return {
                ...state,
                cartItems : addItemToCart(state.cartItems,action.payload)
            }
        default:
            return state
    }
}
export default cartReducer;