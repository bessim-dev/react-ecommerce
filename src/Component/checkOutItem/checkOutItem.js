import React from "react";
import "./checkOutItem.scss";
import { CLEAR_ITEM, RM_ITEM, ADD_ITEM } from "../Redux/cart/cartAction";
import { connect } from "react-redux";

const CheckOutItem = ({ CLEAR_ITEM, RM_ITEM, ADD_ITEM, item }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className='arrow' onClick={() => RM_ITEM(item)}>&#10094;</div>
        <span className="value">{quantity}</span>{" "}
        <div className='arrow' onClick={() => ADD_ITEM(item)}>&#10095;</div>
      </span>

      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => CLEAR_ITEM(item)}>
        &#10005;
      </span>
    </div>
  );
};
const mapDispatchToState = (dispatch) => ({
  CLEAR_ITEM: (item) => dispatch(CLEAR_ITEM(item)),
  ADD_ITEM: (item) => dispatch(ADD_ITEM(item)),
  RM_ITEM: (item) => dispatch(RM_ITEM(item)),
});
export default connect(null, mapDispatchToState)(CheckOutItem);
