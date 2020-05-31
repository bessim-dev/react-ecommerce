import React from "react";
import Button from "../Button/Button";
import "./cartDropDown.scss";
import CartItem from "../CartItem/cartItem";
import { connect } from "react-redux";
const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button className="button">GO TO CHECKOUT</Button>
    </div>
  );
};
const mapStateToProps = ({ cart: { cartItems } }) => ({cartItems});

export default connect(mapStateToProps)(CartDropDown);
