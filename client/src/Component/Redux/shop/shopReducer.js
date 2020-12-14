import ShopActionTypes from "./shopTypes";
const INITIAl_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};
const ShopReducer = (state = INITIAl_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTION_SECCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
        
      };
    case ShopActionTypes.FETCH_COLLECCTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
export default ShopReducer;
