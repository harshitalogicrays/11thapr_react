import React, { useContext, useEffect } from 'react'
import { MyContext } from './ContextData'
import { FaArrowCircleLeft, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Cart = () => {
  const data=useContext(MyContext)
  let {cartItems,total,increase,decrease,removefromcart,emptycart,calculate_total}=data
  useEffect(()=>{
      calculate_total()
  },[cartItems])
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
                <button onClick={()=>decrease(c)}>-</button>
                <input type="text" value={c.qty} style={{width:'40px',textAlign:'center'}}/>
                <button onClick={()=>increase(c)}>+</button>
                </td>
              <td>{c.price * c.qty}</td>
              <td><button type="button" class="btn btn-danger" 
              onClick={()=>removefromcart(c.id)}><FaTrashAlt/> </button>
              </td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col-9">
         <button type="button" class="btn btn-danger btn-lg" onClick={()=>emptycart()}><FaTrashAlt/> Empty Cart </button><br/>
         <Link to='/products'><FaArrowCircleLeft/> Continue Shopping</Link>          
        </div>
        <div className="col">
          <h3>Total: <span className='float-end'>${total}</span></h3><hr/>
          <div class="d-grid gap-2">
            <button type="button" class="btn btn-warning"  >
              Checkout
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Cart
