import React from 'react';
import "./collectionOverview.scss"
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectCollectionForPreview} from "../Redux/shop/shopSelector";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
const CollectionOverview = ({SHOP_DATA}) => {
    return ( 
        <div className="collectionOverview">
        {SHOP_DATA.map(({ id, ...rest }) => (
          <CollectionPreview key={id} {...rest} />
        ))}
      </div>
     );
}

const mapStateToProps = createStructuredSelector({
    SHOP_DATA: selectCollectionForPreview,
  });
 
export default connect(mapStateToProps)(CollectionOverview);