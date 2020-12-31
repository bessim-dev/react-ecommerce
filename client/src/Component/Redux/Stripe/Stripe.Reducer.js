import stripeActionsTypes from "./Stripe.ActionsTypes";
const INITIAL_STATE = {
  processing: false,
  error: null,
  success: false,
};
const StripeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case stripeActionsTypes.PAYMENT_START:
      return {
        ...state,
        processing: true,
        success: false,
      };
    case stripeActionsTypes.PAYMENT_SUCCESS:
      return {
        ...state,
        processing: false,
        success: true,
      };
    case stripeActionsTypes.PAYMENT_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};
export default StripeReducer;
