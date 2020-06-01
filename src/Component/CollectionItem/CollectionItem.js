import React from "react";
import "./CollectionItem.scss";
import Buttom from "../Button/Button";
import { connect } from "react-redux";
import { ADD_ITEM } from "../Redux/cart/cartAction";
const CollectionItem = ({ item, ADD_ITEM }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Buttom 
      onClick = {() => ADD_ITEM(item)}
      inverted className="button">
        add to cart
      </Buttom>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  ADD_ITEM : (item) => dispatch(ADD_ITEM(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
