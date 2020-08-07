import ShopActionTypes from "./shopTypes";
const INITIAl_STATE = {
  collections: null,
};
const ShopReducer = (state = INITIAl_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};
export default ShopReducer;
