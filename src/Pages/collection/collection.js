import React from "react";
import "./collection.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../Component/Redux/shop/shopSelector";
import CollectionItem from "../../Component/CollectionItem/CollectionItem"
const Collection = ({ collection:{title,items} }) => {
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
      {
        items.map(item => <CollectionItem key={item.id} item={item}/>)
      }
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps)=>({
  collection : selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(Collection);
