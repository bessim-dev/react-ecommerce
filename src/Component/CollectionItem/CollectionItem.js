import React from "react";
import { connect } from "react-redux";
import { ADD_ITEM } from "../Redux/cart/cartAction";
import {
  CollectionItemContainer,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  AddButton,
  CollectionFooterContainer,
} from "./CollectionItem.style";
const CollectionItem = ({ item, ADD_ITEM }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => ADD_ITEM(item)} inverted className="button">
        add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  ADD_ITEM: (item) => dispatch(ADD_ITEM(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
