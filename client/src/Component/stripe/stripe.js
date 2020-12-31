import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_ruBq7Og1icsNvtrN8ZHlDHES00wXMJx7FK");

const Stripe = ({ price }) => {
  const priceStripe = price * 100;
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm priceStripe={priceStripe} />
    </Elements>
  );
};
export default Stripe;
