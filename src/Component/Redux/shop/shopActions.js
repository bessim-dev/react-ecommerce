import ShopActionTypes from "./shopTypes";
export const updateCollections = (collectionsObj) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsObj,
});
