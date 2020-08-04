import React from "react";
import { CLEAR_ITEM, RM_ITEM, ADD_ITEM } from "../Redux/cart/cartAction";
import { connect } from "react-redux";
import {
  CheckOutItemContainer,
  ImageContainer,
  TextContainer,
  RemoveButtonContainer,
  QuantityContainer,
} from "./chckOutItem.style";

const CheckOutItem = ({ CLEAR_ITEM, RM_ITEM, ADD_ITEM, item }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div className="arrow" onClick={() => RM_ITEM(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>{" "}
        <div className="arrow" onClick={() => ADD_ITEM(item)}>
          &#10095;
        </div>
      </QuantityContainer>

      <TextContainer className="price">{price}</TextContainer>
      <RemoveButtonContainer onClick={() => CLEAR_ITEM(item)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckOutItemContainer>
  );
};

const mapDispatchToState = (dispatch) => ({
  CLEAR_ITEM: (item) => dispatch(CLEAR_ITEM(item)),
  ADD_ITEM: (item) => dispatch(ADD_ITEM(item)),
  RM_ITEM: (item) => dispatch(RM_ITEM(item)),
});
export default connect(null, mapDispatchToState)(CheckOutItem);
