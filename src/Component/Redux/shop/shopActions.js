import ShopActionTypes from "./shopTypes";
export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,
});
export const fetchCollectionSuccess = (collectionsObj) => ({
  type: ShopActionTypes.FETCH_COLLECTION_SECCESS,
  payload: collectionsObj,
});
export const fetchCollectionError = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECCTION_FAILURE,
  payload: errorMessage,
});
