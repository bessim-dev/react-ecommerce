import React from "react";
import SHOP_DATA from "./Shop_Data";
import CollectionPreview from "../../Component/CollectionPreview/CollectionPreview"
class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { SHOP_DATA };
  }
  render() {
    return (
      <div>
        {this.state.SHOP_DATA.map(({ id, ...rest }) => (
          <CollectionPreview key={id} {...rest} />
        ))}
      </div>
    );
  }
}

export default Shop;
