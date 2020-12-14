import React from "react";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
  ButtonContainer,
} from "./cartDropDown.styles";
import CartItem from "../CartItem/cartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../Redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../Redux/cart/cartAction";
const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>You did not buy yet :(</EmptyMessage>
        )}
      </CartItems>
      <ButtonContainer
        onClick={() => {
          history.push("/checkOut");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </ButtonContainer>
    </CartDropdownContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
