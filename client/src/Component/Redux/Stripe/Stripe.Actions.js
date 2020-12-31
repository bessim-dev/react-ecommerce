import stripeActionsTypes from "./Stripe.ActionsTypes";

export const paymentStart = (data) => ({
  type: stripeActionsTypes.PAYMENT_START,
  payload: data,
});
export const paymentSuccess = () => ({
  type: stripeActionsTypes.PAYMENT_SUCCESS,
});
export const paymentFailure = (e) => ({
  type: stripeActionsTypes.PAYMENT_FAILURE,
  payload: e,
});
