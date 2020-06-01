import {addItemToCart,RMItemFromCart} from "./cartUtils"
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
        case "RM_ITEM" : 
            return {
                ...state,
                cartItems : RMItemFromCart(state.cartItems,action.payload)
            }
        case "CLEAR_ITEM":
            return {
                ...state,
                cartItems : state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
            }
        default:
            return state
    }
}
export default cartReducer;