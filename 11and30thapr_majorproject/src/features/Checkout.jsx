import React from 'react'
import CheckoutSummary from './CheckoutSummary'
import { Link, useNavigate } from 'react-router-dom'
import { saveorder, sendmail } from './hiddenlinks'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserEmail, selectUserId, selectUserName } from '../redux/authSlice'
import { selectShippingAddress } from '../redux/checkoutSlice'
import { EMPTY_CART, selectCartItems, selectTotalAmount } from '../redux/cartSlice'

const Checkout = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const userId=useSelector(selectUserId)
    const userEmail=useSelector(selectUserEmail)
    const shippingAddress=useSelector(selectShippingAddress)
    const cartItems=useSelector(selectCartItems)
    const totalAmount=useSelector(selectTotalAmount)
    const userName=useSelector(selectUserName)
    let CODorder=()=>{
        let payment_mode="cash on delivery"
        let payment_id=null
        let orderDate=new Date().toLocaleDateString()
        let orderTime=new Date().toLocaleTimeString()
        let orderStatus="placed"
        let orderconfig ={userId,userEmail,shippingAddress,cartItems,totalAmount,payment_mode,payment_id,orderDate,orderTime,orderStatus}
        saveorder(orderconfig)
        
        let objmail = {status:orderStatus,email:userEmail,name:userName,amount:totalAmount,payment:payment_mode}
        sendmail(objmail)
        dispatch(EMPTY_CART())
        navigate('/checkout-success')
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
