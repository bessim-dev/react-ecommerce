import React from "react";
import CollectionOverview from "../../Component/collectionOverview/collectionOverview";
import { Route} from "react-router-dom";
import Collection from "../collection/collection";
const Shop = ({match}) => {
  return (
    <>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </>
  );
};

export default Shop;
