import React from "react";
import {
  CartIconComponent,
  CartIconContenantComponent,
  ItemCountComponent,
} from "./cart.style";
import { connect } from "react-redux";
import { TOGGLE_HIDE } from "../Redux/cart/cartAction";
import { selectCartItemsCount } from "../Redux/cart/cartSelector";
const Cart = ({ TOGGLE_HIDE, iconCount }) => {
  return (
    <CartIconContenantComponent onClick={TOGGLE_HIDE}>
      <CartIconComponent className="shopping-icon" />
      <ItemCountComponent>{iconCount}</ItemCountComponent>
    </CartIconContenantComponent>
  );
};
const mapDispatchToProps = (dispatch) => ({
  TOGGLE_HIDE: () => dispatch(TOGGLE_HIDE()),
});
const mapStateToProps = (state) => ({
  iconCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
