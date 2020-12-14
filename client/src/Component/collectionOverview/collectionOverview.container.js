import { createStructuredSelector } from "reselect";
import { selectCollectionIsFetching } from "../../Component/Redux/shop/shopSelector";
import CollectionOverview from "./collectionOverview";
import { connect } from "react-redux";
import { compose } from "redux";
import WithSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading:selectCollectionIsFetching,
});
const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);
export default CollectionOverviewContainer;
