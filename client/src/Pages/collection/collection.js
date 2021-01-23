import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../Component/Redux/shop/shopSelector";
import CollectionItem from "../../Component/CollectionItem/CollectionItem";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./Collection.style";
import SlideShow from "../../Component/SlideShow/SlideShow";
const Collection = ({ collection: { title, items } }) => {
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <SlideShow items={items} />
    </CollectionPageContainer>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(Collection);
