import React from "react";
import Button from "../Button/Button";
import "./cartDropDown.scss";
import CartItem from "../CartItem/cartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../Redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { TOGGLE_HIDE } from "../Redux/cart/cartAction";
const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">You have not buy yet :(</span>
        )}
      </div>
      <Button
        className="button"
        onClick={() => {
          history.push("/checkOut");
          dispatch(TOGGLE_HIDE());
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
