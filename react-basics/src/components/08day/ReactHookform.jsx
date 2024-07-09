import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const ReactHookform = () => {
    const {register,handleSubmit, formState: { errors }, trigger,getValues} = useForm()
    let submitData=(user)=>{
        alert(JSON.stringify(user))
    }
  return (  
    <Container className="col-8">
        <Row>
            <Col>
                <Form onSubmit={handleSubmit(submitData)}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" {...register('username', 
                        {required:"Username is required" , 
                         minLength:{value:'5',message:'min 5 char'},
                         maxLength:{value:'10',message:'max 10 char'}
                        } 
                        )}     onBlur={()=>trigger('username')}                     
                        />
                        {errors.username && <span className='text-danger'>
                            {errors.username.message}</span>}
                    </Form.Group>
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
                    <Form.Group className='mb-3'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="cpassword" {...register('cpassword',{required:'Confirm Password is required',
                        validate:(cpwd)=>{
                            let {password}=getValues() //{username:'',email:'',password:'',cpassword:''}
                            return password==cpwd || "Password not match"
                        }

                        })}  onBlur={()=>trigger('cpassword')}/>
                        {errors.cpassword && <span className='text-danger'>
                            {errors.cpassword.message}</span>}
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default ReactHookform
