import React, { useState } from 'react'
import Image1 from '../../assets/register.png'
const Form1 = () => {
    let [user,setUser] =useState({username:'',email:'',password:'',cpassword:''})
    let handleChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value}) //setUser({username:'',password:"aaa123",email:'',cpassword:''})
    }
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
                    value={user.username} onChange={handleChange}/>
                 </div>
                 <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text"  name="email" className="form-control"
                     value={user.email} onChange={handleChange}/>
                 </div>
                 <div className="mb-3">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password"  name="password" className="form-control"
                     value={user.password} onChange={handleChange}/>
                 </div>
                 <div className="mb-3">
                    <label htmlFor="" className="form-label">Confirm Password</label>
                    <input type="password"  name="cpassword" className="form-control"
                     value={user.cpassword} onChange={handleChange}/>
                 </div>
                 <button type="submit" class="btn btn-primary"  >Submit  </button>
                 
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form1
