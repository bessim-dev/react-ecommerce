import React from "react";
import { connect } from "react-redux";
import { addItem } from "../Redux/cart/cartAction";
import {
  CollectionItemContainer,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  AddButton,
  CollectionFooterContainer,
} from "./CollectionItem.style";
const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted className="button">
        add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
