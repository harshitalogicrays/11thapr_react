import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../../firebase/config'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { sendmail } from '../hiddenlinks'

const ChangeOrderStatus = ({s,order,id}) => {
    let [status,setStatus]=useState(s)
    const navigate=useNavigate()
    let updateStatus=async(e)=>{
        e.preventDefault()
        if(status !="Delivered"){
        try{
            let docRef = doc(db,"orders",id)
            await setDoc(docRef,{...order,orderStatus:status,createdAt:order.createdAt,editedAt:Timestamp.now().toMillis()})
            toast.success("order updated")
            let objmail = {status,email:order.userEmail,name:order.userEmail,amount:order.totalAmount,payment:order.payment_mode}
            sendmail(objmail)
            navigate('/admin/orders')
        }
        catch(error){toast.error(error.message)}
      }
      else  navigate('/admin/orders')
    }
  return (
    <>
   <hr/>
   <form onSubmit={updateStatus}>
   <div class="mb-3">
    <label for="" class="form-label">Update Order Status</label>
    <select class="form-select" name="status"  
    value={status} onChange={(e)=>setStatus(e.target.value)} >
        <option>Placed</option>
        <option>Shipped</option>
        <option>Processing</option>
        <option>Cancelled</option>
        <option>Out for Delivery</option>
        <option>Delivered</option>
    </select>
   </div>
   <button
    type="submit"
    class="btn btn-primary" 
   >
    Submit
   </button>
   
   </form>

   </>
  )
}

export default ChangeOrderStatus
