import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../Redux/shop/shopSelector";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { CollectionOverviewContainer } from "./collectionOverview.style";
const CollectionOverview = ({ SHOP_DATA }) => {
  return (
    <CollectionOverviewContainer>
      {SHOP_DATA.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  SHOP_DATA: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
