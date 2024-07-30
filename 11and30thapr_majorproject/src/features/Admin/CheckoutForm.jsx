import React, { useEffect, useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import CheckoutSummary from "../CheckoutSummary";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EMPTY_CART, selectCartItems, selectTotalAmount } from "../../redux/cartSlice";
import { selectUserEmail, selectUserId, selectUserName } from "../../redux/authSlice";
import { selectShippingAddress } from "../../redux/checkoutSlice";
import { saveorder, sendmail } from "../hiddenlinks";

export default function CheckoutForm() {
    const dispatch=useDispatch()
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


    const userId=useSelector(selectUserId)
    const userEmail=useSelector(selectUserEmail)
    const shippingAddress=useSelector(selectShippingAddress)
    const cartItems=useSelector(selectCartItems)
    const totalAmount=useSelector(selectTotalAmount)
    const userName=useSelector(selectUserName)
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
                // console.log(result.paymentIntent)
                toast.success("payment done")
                let payment_mode="online"
                let payment_id=result.paymentIntent.id
                let orderDate=new Date().toLocaleDateString()
                let orderTime=new Date().toLocaleTimeString()
                let orderStatus="placed"
                let orderconfig ={userId,userEmail,shippingAddress,cartItems,totalAmount,payment_mode,payment_id,orderDate,orderTime,orderStatus}
                saveorder(orderconfig)

                let objmail = {status:orderStatus,email:userEmail,name:userName,amount:totalAmount,payment:payment_mode}
                sendmail(objmail)
                dispatch(EMPTY_CART())           
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