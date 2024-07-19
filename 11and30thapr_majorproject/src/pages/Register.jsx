import React, { useState } from 'react'
import Image1 from '/src/assets/register.png'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from '../features/Loader'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase/config'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
const Register = () => {
  let obj={username:'',email:'',password:'',cpassword:'',role:'1'}
  let [user,setUser] =useState({...obj})
  let [errors,setErrors]=useState({}) 
  let  [isLoading,setIsLoading]=useState(false)
  const redirect = useNavigate() 
  let validations=()=>{
      let formerrors={}
      let pattern=/^[\w\!\#\$\%\^\&\*\-\+\=\.]+\@[\w]+\.[a-zA-Z]{3}$/
      if(user.username==''){
          formerrors.nameerr="username is required"; }
      if(user.email==''){
          formerrors.emailerr="email is required"}
      else if(!pattern.test(user.email)) formerrors.emailerr="Invalid Email"
      if(user.password=='') formerrors.pwderr="password is required"
      if(user.cpassword=='' || user.password !=user.cpassword) formerrors.cpwderr="password not match"
      return formerrors
  }
  let handleSubmit=(e)=>{ 
      e.preventDefault()
      let myerrors = validations() 
      if(Object.keys(myerrors).length==0){
          setErrors({})
          setUser({...obj})
           setIsLoading(true)
           createUserWithEmailAndPassword(auth, user.email, user.password)
            .then(async(userCredential) => {
                 const user1 = userCredential.user;
                // console.log(user1)
                    const docRef = doc(db,"users",user1.uid)
                    await setDoc(docRef,{...user,createdAt:Timestamp.now().toMillis()})
                    setIsLoading(false)
                    toast.success("loggedIn Successfully")
                    redirect('/')
            })
            .catch((error) => { toast.error(err.message);  setIsLoading(false)
            });
    }
      else { setErrors(myerrors)  }    
  }
return (
    <>
    {isLoading && <Loader/>}
     <div className='container'>
       <div className="row">
          <div className="col">
              <img src={Image1}  className='img-fluid'/>
          </div>
          <div className="col">
              <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  <label htmlFor="" className="form-label">Username</label>
                  <input type="text"  name="username" className={`form-control ${errors.nameerr && 'is-invalid'}`}
                  value={user.username} onChange={ (e)=> setUser({...user, username:e.target.value})}/>
                  {errors.nameerr && <span className='text-danger'>{errors.nameerr}</span>}
               </div>
               <div className="mb-3">
                  <label htmlFor="" className="form-label">Email</label>
                  <input type="text"  name="email" className={`form-control ${errors.emailerr && 'is-invalid'}`}
                   value={user.email} onChange={ (e)=> setUser({...user, email:e.target.value})}/>
                         {errors.emailerr && <span className='text-danger'>{errors.emailerr}</span>}
               </div>
               <div className="mb-3">
                  <label htmlFor="" className="form-label">Password</label>
                  <input type="password"  name="password" className={`form-control ${errors.pwderr && 'is-invalid'}`}
                   value={user.password} onChange={(e)=> setUser({...user, password:e.target.value})}/>
                   {errors.pwderr && <span className='text-danger'>{errors.pwderr}</span>}
               </div>
               <div className="mb-3">
                  <label htmlFor="" className="form-label">Confirm Password</label>
                  <input type="password"  name="cpassword" className={`form-control ${errors.cpwderr && 'is-invalid'}`}
                   value={user.cpassword} onChange={(e)=> setUser({...user, cpassword:e.target.value})}/>
                   {errors.cpwderr && <span className='text-danger'>{errors.cpwderr}</span>}
               </div>
               <button type="submit" class="btn btn-primary"  >Submit  </button>
               <p>Already an account?? <Link to='/login'>Login</Link></p>
              </form>
          </div>
      </div>
  </div>
  </>
 
  )
}

export default Register
