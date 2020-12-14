import React, { useEffect } from "react";
import CollectionOverviewContainer from "../../Component/collectionOverview/collectionOverview.container";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionContainer from "../collection/collection.container";
import { fetchCollectionStart } from "../../Component/Redux/shop/shopActions";

const Shop = ({ fetchCollectionStart,match }) => {
useEffect(() => {
  fetchCollectionStart();
},[fetchCollectionStart])
    return (
      <>
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </>
    );
  }
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});
export default connect(null, mapDispatchToProps)(Shop);
