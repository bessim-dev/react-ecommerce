import React from "react";
import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
} from "./cartItem.style";
const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
