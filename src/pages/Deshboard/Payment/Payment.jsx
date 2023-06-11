import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm/CheckOutForm";
import { useLocation } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);


const Payment = () => {
    const location = useLocation();
    const selected = location.state;
   console.log(selected);

  return (
    <div className="w-full">
      <h2 className="text-center mb-14 text-4xl">Payment Here..............</h2>
      <Elements stripe={stripePromise}>
        <CheckOutForm selected={selected}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
