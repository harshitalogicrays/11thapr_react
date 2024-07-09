import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import LoginImg from '/src/assets/login.png'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import Loader from '../features/Loader'
const Login = () => {
  const {register,handleSubmit, formState: { errors }, trigger} = useForm()
  let [isLoading,setIsLoading]=useState(false)
  const redirect = useNavigate()
    let submitData=async(user)=>{
      try{
        // let res = await fetch(`https://6678ef690bd45250562056c5.mockapi.io/users?email=${user.email}`)
        // let data = await res.json()
      //   if(data[0].password == user.password){
      //     redirect('/')
      // }
      // else  {
      //   toast.error("Invalid Credentials")
      // }

      //axios
      setIsLoading(true)
        let res = await axios.get(`https://6678ef690bd45250562056c5.mockapi.io/users?email=${user.email}`)
        if(res.data[0].password == user.password){
            if(res.data[0].role=="0"){
                toast.success("loggedIn successfully")
                redirect('/admin')
            }
            else if(res.data[0].role=="1"){
              toast.success("loggedIn successfully")
              redirect('/')
            }

            let obj = {isLoggedIn:true, email:res.data[0].email,name:res.data[0].username,role:res.data[0].role}
            sessionStorage.setItem("11aprmini",JSON.stringify(obj))
            setIsLoading(false)
          }
          else  {
            setIsLoading(false)
            toast.error("Invalid Credentials")
          }     
      }
      catch(err){
        setIsLoading(false)
        toast.error("Invalid Credentials")
      }
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

                    <Button type="submit">Login</Button>
                    <p>Create an account?? <Link to='/register'>Register</Link></p>
                </Form>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Login
