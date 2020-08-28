import React from "react";
import { addItem, removeItem, clearItemFromCart } from "../Redux/cart/cartAction";
import { connect } from "react-redux";
import {
  CheckOutItemContainer,
  ImageContainer,
  TextContainer,
  RemoveButtonContainer,
  QuantityContainer,
} from "./chckOutItem.style";

const CheckOutItem = ({ clearItemFromCart, removeItem, addItem, item }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>{" "}
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </QuantityContainer>

      <TextContainer className="price">{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(item)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckOutItemContainer>
  );
};

const mapDispatchToState = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToState)(CheckOutItem);
