import axios from "axios";
export const fetchData = ({ priceStripe, paymentMethodId }) =>
  axios.post("payment", {
    amount: priceStripe,
    paymentMethodId: paymentMethodId,
  });
