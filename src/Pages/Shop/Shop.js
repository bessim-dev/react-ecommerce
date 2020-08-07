import React from "react";
import CollectionOverview from "../../Component/collectionOverview/collectionOverview";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Collection from "../collection/collection";
import WithSpinner from "../../Component/with-spinner/with-spinner.component";
import {
  firestore,
  convertSnapshotToObj,
} from "../../Component/FireBase/FireBase";
import { updateCollections } from "../../Component/Redux/shop/shopActions";
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);
class Shop extends React.Component {
  state = {
    isLoading: true,
  };
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionsRef = firestore.collection("collections");
    collectionsRef.onSnapshot(async (snapshot) => {
      const collectionsObj = convertSnapshotToObj(snapshot);
      updateCollections(collectionsObj);
      this.setState({ isLoading: false });
    });
  }
  render() {
    const { isLoading } = this.state;
    const { match } = this.props;
    return (
      <>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsObj) =>
    dispatch(updateCollections(collectionsObj)),
});
export default connect(null, mapDispatchToProps)(Shop);
