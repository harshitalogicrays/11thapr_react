import React, { useContext, useEffect } from 'react'
import { FaArrowCircleLeft, FaTrashAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { ADD_TO_CART, CALCULATE_TOTAL, DECREASE, EMPTY_CART, REMOVE_FROM_CART, SAVE_URL, selectCartItems, selectTotalAmount } from '../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../redux/authSlice'

const Cart = () => {
  const cartItems=useSelector(selectCartItems)
  const total = useSelector(selectTotalAmount)
  const isLoggedIn=useSelector(selectIsLoggedIn)
  const dispatch=useDispatch()
  const redirect=useNavigate()
  useEffect(()=>{
    dispatch(CALCULATE_TOTAL())
  },[cartItems])

  let url =window.location.href //http://localhost:3000/cart
  let handleCheckout=()=>{
    if(cartItems.length==0){redirect('/cart')}
    else if(isLoggedIn){redirect('/checkout-details')}
    else {
      dispatch(SAVE_URL(url))
      redirect('/login')
    }
  }
  return (
    <div className='container mt-5 shadow p-2'>
      <h1>Cart Page</h1>
      <hr/>
      <div class="table-responsive" >
        <table class="table table-bordered table-striped table-hover"  >
          <thead>
            <tr>
              <th scope="col">Sr. No</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length==0 && <tr><td colSpan={7}>No Item in cart</td></tr>}
            {cartItems.map((c,i)=>
            <tr key={i}>
              <td scope="row">{i+1}</td>
              <td>{c.name}</td>
              <td><img src={c.image} height={50} width={50}/></td>
              <td scope="row">{c.price}</td>
              <td>
                <button onClick={()=>dispatch(DECREASE(c))}>-</button>
                <input type="text" value={c.qty} style={{width:'40px',textAlign:'center'}}/>
                <button onClick={()=>dispatch(ADD_TO_CART(c))}>+</button>
                </td>
              <td>{c.price * c.qty}</td>
              <td><button type="button" class="btn btn-danger" 
              onClick={()=>dispatch(REMOVE_FROM_CART(c.id))}><FaTrashAlt/> </button>
              </td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col-9">
         <button type="button" class="btn btn-danger btn-lg" onClick={()=>dispatch(EMPTY_CART())}><FaTrashAlt/> Empty Cart </button><br/>
         <Link to='/products'><FaArrowCircleLeft/> Continue Shopping</Link>          
        </div>
        <div className="col">
          <h3>Total: <span className='float-end'>${total}</span></h3><hr/>
          <div class="d-grid gap-2">
            <button type="button" class="btn btn-warning" onClick={handleCheckout} >
              Checkout
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Cart
