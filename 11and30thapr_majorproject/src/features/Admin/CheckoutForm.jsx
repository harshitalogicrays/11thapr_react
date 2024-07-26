import React, { useEffect, useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import CheckoutSummary from "../CheckoutSummary";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
    const redirect=useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!stripe) { return; }
        const clientSecret = new URLSearchParams(window.location.search).get( "payment_intent_client_secret"  );
        if (!clientSecret) {  return;   }
    }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) { return;   }
        setIsLoading(true);
        try{
            let result = await stripe.confirmPayment({
              elements, confirmParams: {
                return_url: "http://localhost:3000",
              },   redirect:"if_required" });
            
            if(result.error){toast.error(result.error);return}
            if(result.paymentIntent){
              if(result.paymentIntent.status=='succeeded'){
                toast.success("payment done")
                redirect('/checkout-success')
              }
            } 
          }
        catch(err){
            setIsLoading(false);toast.error(err.message)
        }      
    };

    const paymentElementOptions = {  layout: "tabs"  }

    return (
        <div className="container mt-5 shadow p-2">
            <div className="row">
                <div className="col">  <CheckoutSummary /> </div>
                <div className="col">
                        <h1>Checkout Stripe Payment </h1><hr/>
                    <form id="payment-form" onSubmit={handleSubmit}>

                        <PaymentElement id="payment-element" options={paymentElementOptions} />
                        <div class="d-grid gap-2">
                        <button className="mt-3 btn btn-info"  disabled={isLoading || !stripe || !elements} id="submit">
                            <span id="button-text">
                                {isLoading ? <div class="d-flex justify-content-center">
                                    <div class="spinner-border text-warning " role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                    </div>: <span className="text-white">(Pay now)</span>}
                            </span>
                        </button>
                        </div>
                          {message && <div id="payment-message">{message}</div>}
                    </form></div>
            </div>
        </div>

    );
}