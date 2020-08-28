import { takeLatest, call, put } from "redux-saga/effects";
import ShopActionTypes from "./shopTypes";
import { fetchCollectionSuccess, fetchCollectionError } from "./shopActions";
import { firestore, convertSnapshotToObj } from "../../FireBase/FireBase";

export function* fetchCollectionAsync() {
  try {
    const collectionsRef = firestore.collection("collections");
    const snapshot = yield collectionsRef.get();
    const collectionsObj = yield call(convertSnapshotToObj, snapshot);
    yield put(fetchCollectionSuccess(collectionsObj));
  } catch (e) {
    yield put(fetchCollectionError(e));
  }
}
export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionAsync
  );
}
