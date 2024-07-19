import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import LoginImg from '/src/assets/login.png'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from '../features/Loader'
import { useDispatch } from 'react-redux'
import { LOGIN_USER } from '../redux/authSlice'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, db } from '../firebase/config'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import { FaGoogle } from 'react-icons/fa'
import { GoogleAuthProvider } from 'firebase/auth'
const Login = () => {
  const {register,handleSubmit, formState: { errors }, trigger} = useForm()
  let [isLoading,setIsLoading]=useState(false)
  const redirect = useNavigate()
  const dispatch=useDispatch()
    let submitData=async(user)=>{
      setIsLoading(true)
      signInWithEmailAndPassword(auth, user.email, user.password)
      .then(async(userCredential) => {
           const user1 = userCredential.user;
           const docRef = doc(db,"users",user1.uid)
          const docSnap = await getDoc(docRef)
          if(docSnap.exists()){
            // console.log(docSnap.data())
            if(docSnap.data().role=="0") redirect('/admin')
            else if(docSnap.data().role=="1") redirect('/')
          }
           toast.success("loggedIn successfully")
           setIsLoading(false)
          
      })
      .catch((error) => {
        setIsLoading(false)
        toast.error(error.message)
      });
     }
     const provider = new GoogleAuthProvider();
     let loginwithgoogle=()=>{
      signInWithPopup(auth, provider)
      .then(async(result) => {
          const user = result.user;
        //  console.log(user)
        const docRef = doc(db,"users",user.uid)
        await setDoc(docRef,{username:user.displayName,email:user.email,role:'1',createdAt:Timestamp.now().toMillis()})
        toast.success("loggedIn successfully")
        redirect('/')
      }).catch((error) => {
        toast.error(error.message)
      });
     }
  return (  
    <>
    {isLoading && <Loader/>}
    <Container className="col-8 shadow mt-5 p-3">
      <h1>Login Page</h1><hr/>
        <Row>
          <Col>
            <Image src={LoginImg} fluid/>
          </Col> 
            <Col>
                <Form onSubmit={handleSubmit(submitData)}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" {...register('email',{required:'email is required',
                        pattern:{
                            value:/^[\w\!\#\$\%\^\&\*\-\+\=\.]+\@[\w]+\.[a-zA-Z]{3}$/ , message:'Invalid Email'
                        }})}  onBlur={()=>trigger('email')}/>
                        {errors.email && <span className='text-danger'>
                            {errors.email.message}</span>}
                    </Form.Group>
                  
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" {...register('password',{required:'Password is required'})} onBlur={()=>trigger('password')}/>
                        {errors.password && <span className='text-danger'>
                            {errors.password.message}</span>}
                    </Form.Group>
                          <div class="d-grid gap-2">
                          <Button type="submit">Login</Button>
                          </div>
                          <hr/>
                          <div class="d-grid gap-2">
                          <Button type="button" variant='secondary' onClick={loginwithgoogle}>
                            <FaGoogle/> Login  with google</Button>
                          </div>
                    
                    <p>Create an account?? <Link to='/register'>Register</Link></p>
                </Form>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Login
