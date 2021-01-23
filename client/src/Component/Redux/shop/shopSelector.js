import { createSelector } from "reselect";

const selectShop = (state) => state.shop;
export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.collections
);
export const selectCollectionForPreview = createSelector(
  [selectShopData],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);
export const selectCollectionNamesForSearch = createSelector(
  [selectCollectionForPreview],
  (collections) =>
    collections
      ? collections.map((array) => ({
          routeName: array.routeName,
          itemsName: array.items.map((el) => el.name),
        }))
      : []
);
export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopData], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
export const selectCollectionIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
export const selectCollectionIsLoading = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
export default selectShopData;
