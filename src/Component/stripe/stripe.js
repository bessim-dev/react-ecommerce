import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Stripe = ({ price }) => {
  const publicKey = "pk_test_ruBq7Og1icsNvtrN8ZHlDHES00wXMJx7FK";
  const priceStripe = price * 100;
  const onToken = (token) => {
    console.log(token);
    alert("Your payment is successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="react-ecommerce"
      billingAddress
      shippingAddress
      description={`Your total is ${price}`}
      amount={priceStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};
export default Stripe;