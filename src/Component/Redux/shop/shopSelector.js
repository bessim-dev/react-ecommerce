import { createSelector } from "reselect";

const selectShop = (state) => state.shop;
const selectShopData = createSelector([selectShop], (shop) => shop.SHOP_DATA);
export const selectCollectionForPreview = createSelector(
  [selectShopData],
  SHOP_DATA => Object.keys(SHOP_DATA).map(keys => SHOP_DATA[keys])
)
export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopData],
    (SHOP_DATA) => SHOP_DATA[collectionUrlParam]
  );
export default selectShopData;
