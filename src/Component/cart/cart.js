import React from "react";
import {
  CartIconComponent,
  CartIconContenantComponent,
  ItemCountComponent,
} from "./cart.style";
import { connect } from "react-redux";
import { toggleCartHidden } from "../Redux/cart/cartAction";
import { selectCartItemsCount } from "../Redux/cart/cartSelector";
const Cart = ({ toggleCartHidden, iconCount }) => {
  return (
    <CartIconContenantComponent onClick={toggleCartHidden}>
      <CartIconComponent className="shopping-icon" />
      <ItemCountComponent>{iconCount}</ItemCountComponent>
    </CartIconContenantComponent>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = (state) => ({
  iconCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
