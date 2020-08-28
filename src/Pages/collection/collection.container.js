import { createStructuredSelector } from "reselect";
import WithSpinner from "../../Component/with-spinner/with-spinner.component";
import { selectCollectionIsLoading } from "../../Component/Redux/shop/shopSelector";
import Collection from "./collection";
import { connect } from "react-redux";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionIsLoading(state),
});
const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);
export default CollectionContainer;
