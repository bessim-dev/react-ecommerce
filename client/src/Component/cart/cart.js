import React, { useRef } from "react";
import {
  CartIconComponent,
  CartIconContenantComponent,
  ItemCountComponent,
} from "./cart.style";
import { connect } from "react-redux";
import { toggleCartHidden, hideCart } from "../Redux/cart/cartAction";
import { selectCartItemsCount } from "../Redux/cart/cartSelector";
import OutsideClickEvent from "../OutsideClickEvent/OutsideClickEvent";
const Cart = ({ toggleCartHidden, iconCount, hideCart }) => {
  const ref = useRef();
  OutsideClickEvent(ref, hideCart);
  return (
    <CartIconContenantComponent onClick={toggleCartHidden} ref={ref}>
      <CartIconComponent className="shopping-icon" />
      <ItemCountComponent>{iconCount}</ItemCountComponent>
    </CartIconContenantComponent>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
  hideCart: () => dispatch(hideCart()),
});
const mapStateToProps = (state) => ({
  iconCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
