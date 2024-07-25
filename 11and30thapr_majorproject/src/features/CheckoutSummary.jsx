import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems, selectTotalAmount } from '../redux/cartSlice'

const CheckoutSummary = () => {
    const cartItems=useSelector(selectCartItems)
    const total=useSelector(selectTotalAmount)
  return (
    <div>
      <h1>Checkout Summary</h1><hr/>
      <div className="card">
        <div className="card-header">
            <p>Total Products : ({cartItems.length})<br/>Total Amount :${total}</p>
        </div>
        <div className="card-body">
            {cartItems.map((c,i)=><>
                <p>Name: {c.name}<br/>
                Qty:{c.qty}<br/>unit price:{c.price}
                </p>
                <hr/>
            </>)}
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary
