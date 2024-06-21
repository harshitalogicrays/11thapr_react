import React from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import LoginImg from '/src/assets/login.png'
import { Link } from 'react-router-dom'
const Login = () => {
  const {register,handleSubmit, formState: { errors }, trigger} = useForm()
    let submitData=(user)=>{
        alert(JSON.stringify(user))
    }
  return (  
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
  )
}

export default Login
