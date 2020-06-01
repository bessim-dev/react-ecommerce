import React from "react";
import "./checkOut.scss";
import { createStructuredSelector } from "reselect";
import {} from "../../Component/Redux/User/userSelector";
import { connect } from "react-redux";
import { selectCartTotal, selectCartItems } from "../../Component/Redux/cart/cartSelector";
import CheckOutItem from "../../Component/checkOutItem/checkOutItem";

const CheckOut = ({ cartTotal,cartItems }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <span className="header-block">product</span>
        <span className="header-block">description</span>
        <span className="header-block">quantity</span>
        <span className="header-block">price</span>
        <span className="header-block">remove</span>
      </div>
      {
        cartItems.map(cartItem => (
        <CheckOutItem key={cartItem.id} item = {cartItem}/>
          )
        )
      }
      
      <div className="total">total: ${cartTotal}</div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartTotal: selectCartTotal,
  cartItems:selectCartItems
});
export default connect(mapStateToProps)(CheckOut);
