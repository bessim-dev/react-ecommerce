import { takeLatest, put, all, call } from "redux-saga/effects";
import stripeActionsTypes from "./Stripe.ActionsTypes";
import { paymentFailure, paymentSuccess } from "./Stripe.Actions";
import { fetchData } from "./Stripe.utils";
import axios from "axios";

export function* processPaymentStart({
  payload: priceStripe,
  paymentMethodId,
}) {
  const res = yield axios
    .post("payment", {
      amount: priceStripe,
      paymentMethodId: paymentMethodId,
    })
    .then(yield put(paymentSuccess()))
    .catch((e) => put(paymentFailure(JSON.parse(e.message))));
}
export function* onPaymentStart() {
  yield takeLatest(stripeActionsTypes.PAYMENT_START, processPaymentStart);
}
export function* stripeSaga() {
  yield all([call(onPaymentStart)]);
}
