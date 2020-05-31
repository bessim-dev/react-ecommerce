import React from 'react';
import {ReactComponent as CartIcon} from './cart-icon.svg'
import "./cart.scss"
import { connect } from 'react-redux';
import  {TOGGLE_HIDE } from '../Redux/cart/cartAction';
const Cart = ({TOGGLE_HIDE}) => {
    return ( 
        <div className="cart-icon" onClick={TOGGLE_HIDE}>
            <CartIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
     );
} 
const mapDispatchToProps = dispatch => ({
    TOGGLE_HIDE : () => dispatch(TOGGLE_HIDE())
})
export default connect(null,mapDispatchToProps)(Cart);
