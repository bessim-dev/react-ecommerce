import React from "react";

import { createStructuredSelector } from "reselect";
import {} from "../../Component/Redux/User/userSelector";
import { connect } from "react-redux";
import { selectCartTotal, selectCartItems } from "../../Component/Redux/cart/cartSelector";
import CheckOutItem from "../../Component/checkOutItem/checkOutItem";
import Stripe from "../../Component/stripe/stripe";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styles';

const CheckOut = ({ cartTotal,cartItems }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>product</HeaderBlockContainer>
        <HeaderBlockContainer>description</HeaderBlockContainer>
        <HeaderBlockContainer>quantity</HeaderBlockContainer>
        <HeaderBlockContainer>price</HeaderBlockContainer>
        <HeaderBlockContainer>remove</HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {
        cartItems.map(cartItem => (
        <CheckOutItem key={cartItem.id} item = {cartItem}/>
          )
        )
      }
      
      <TotalContainer>total: ${cartTotal}</TotalContainer>
      <WarningContainer>
        *please use the fllowing test credit card for payment*
        <br/>
        4242 4242 4242 4242 - Exp:01/20 - CVV:123
      </WarningContainer>
      <Stripe price={`$${cartTotal}`}/>
    </CheckoutPageContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  cartTotal: selectCartTotal,
  cartItems:selectCartItems
});
export default connect(mapStateToProps)(CheckOut);
