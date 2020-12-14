import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../Component/Redux/shop/shopSelector";
import CollectionItem from "../../Component/CollectionItem/CollectionItem"
import { CollectionPageContainer, CollectionTitle,CollectionItemsContainer } from "./Collection.style";
const Collection = ({ collection:{title,items} }) => {
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
      {
        items.map(item => <CollectionItem key={item.id} item={item}/>)
      }
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};
const mapStateToProps = (state, ownProps)=>({
  collection : selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(Collection);
