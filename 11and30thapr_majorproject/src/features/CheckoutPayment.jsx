import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Admin/CheckoutForm";
import { useSelector } from "react-redux";
import { selectTotalAmount } from "../redux/cartSlice";
const stripePromise = loadStripe("pk_test_51PhkLOFS0pGWFKNuTeAtfqxIqhAlRowaDtCQFGrfePvHQjH9iD0R5U6YPCjekQGpuTz9nziiOsioq1Pvl1FZOgXv008eioKYTb");


const CheckoutPayment = () => {
    const [clientSecret, setClientSecret] = useState("");
    const totalAmount=useSelector(selectTotalAmount)
    useEffect(() => {
         fetch("https://11thapr-firebase-node.vercel.app/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ totalAmount }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, []);
  
    const appearance = { theme: 'stripe' };
    const options = { clientSecret,appearance};
  
    return (
      <div className="App">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    );
  }

export default CheckoutPayment
