import React from 'react'
import CheckoutSummary from './CheckoutSummary'
import { Link } from 'react-router-dom'

const Checkout = () => {
    let CODorder=()=>{
        
    }
  return (
    <div className='container mt-5 p-3 shadow'>
        <div className="row">
            <div className="col">
                <CheckoutSummary/>
            </div>
            <div className="col">
                <h1>Place Order</h1><br/>
                <button type="button" class="btn btn-primary mb-3" onClick={CODorder}>
                    Cash on Delivery
                </button> <br/>
                <Link type="button" class="btn btn-danger" to='/checkout-payment' >
                    Stripe Payment
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Checkout
