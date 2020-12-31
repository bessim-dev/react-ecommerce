import { call, all } from "redux-saga/effects";
import { fetchCollectionStart } from "./shop/shopSagas";
import { userSaga } from "./User/UserSaga";
import { CartSaga } from "./cart/cartSaga";
import { stripeSaga } from "./Stripe/Stripe.Saga";
export default function* rootSaga() {
  yield all([
    call(fetchCollectionStart),
    call(userSaga),
    call(CartSaga),
    call(stripeSaga),
  ]);
}
