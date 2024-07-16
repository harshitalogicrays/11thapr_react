import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddCategory = () => {
    const redirect=useNavigate()
    let [category,setCategory]=useState({name:'',desc:"",isActive:false})
    let handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            await fetch(`${import.meta.env.VITE_BACKEND_URL}/category`,{
                method:"POST",
                headers:{'content-type':'application/json'},
                body:JSON.stringify({...category,createdAt:Date.now()})
                 }) 
                toast.success("category added")
                redirect('/admin/view/category')
        }
        catch(error){toast.error(error)}
       
    }
  return (
    <>
        <Card className='mt-4'>
            <Card.Header>
                <h1>Add Category 
                    <Link type="button" class="btn btn-primary float-end btn-lg "  
                    to='/admin/view/category'>View Categories</Link>
                </h1>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" value={category.name}
                        onChange={(e)=>setCategory({...category,name:e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name="desc" value={category.desc}
                        onChange={(e)=>setCategory({...category,desc:e.target.value})}></Form.Control>
                    </Form.Group>
                    <div class="form-check-inline mb-3">                
                    <label class="form-check-label me-2">status: </label>
                    <input class="form-check-input" type="radio" name="isActive" 
                    onClick={(e)=>setCategory({...category,isActive:!category.isActive})} 
                    checked={category.isActive}/>
                    </div><br/>
                    <Button type="submit">Add</Button>
                </Form>
            </Card.Body>
        </Card>
    </>
  )
}

export default AddCategory
