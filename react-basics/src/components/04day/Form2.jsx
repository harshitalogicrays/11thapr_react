import React, { useState } from 'react'
import Image1 from '../../assets/register.png'
const Form2 = () => {
    let [user,setUser] =useState({username:'',email:'',password:'',cpassword:''})
    let handleSubmit=(e)=>{ e.preventDefault()
        alert(JSON.stringify(user)) }
  return (
    <div className='container'>
        <div className="row">
            <div className="col">
                <img src={Image1}  className='img-fluid'/>
            </div>
            <div className="col">
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Username</label>
                    <input type="text"  name="username" className="form-control"
                    value={user.username} onChange={ (e)=> setUser({...user, username:e.target.value})}/>
                 </div>
                 <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text"  name="email" className="form-control"
                     value={user.email} onChange={ (e)=> setUser({...user, email:e.target.value})}/>
                 </div>
                 <div className="mb-3">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password"  name="password" className="form-control"
                     value={user.password} onChange={(e)=> setUser({...user, password:e.target.value})}/>
                 </div>
                 <div className="mb-3">
                    <label htmlFor="" className="form-label">Confirm Password</label>
                    <input type="password"  name="cpassword" className="form-control"
                     value={user.cpassword} onChange={(e)=> setUser({...user, cpassword:e.target.value})}/>
                 </div>
                 <button type="submit" class="btn btn-primary"  >Submit  </button>
                 
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form2
