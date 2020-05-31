import React from "react";
import { ReactComponent as CartIcon } from "./cart-icon.svg";
import "./cart.scss";
import { connect } from "react-redux";
import { TOGGLE_HIDE } from "../Redux/cart/cartAction";
import { selectCartItemsCount } from "../Redux/cart/cartSelector";
const Cart = ({ TOGGLE_HIDE, iconCount }) => {
  return (
    <div className="cart-icon" onClick={TOGGLE_HIDE}>
      <CartIcon className="shopping-icon" />
      <span className="item-count">{iconCount}</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  TOGGLE_HIDE: () => dispatch(TOGGLE_HIDE()),
});
const mapStateToProps = state => ({
  iconCount : selectCartItemsCount(state)
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
