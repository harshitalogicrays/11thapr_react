import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { selectCategories } from '../../redux/categorySlice'
import { db } from '../../firebase/config'
import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore'

const AddCategory = () => {
    const redirect=useNavigate()
    let [category,setCategory]=useState({name:'',desc:"",isActive:false})

//edit
    const {id}=useParams()
    const categories = useSelector(selectCategories)
    const categoryEdit = categories.find(item=>item.id==id)
    useEffect(()=>{
        if(id){ setCategory({...categoryEdit})}
        else {
            setCategory({name:'',desc:"",isActive:false})}
    },[id])

    let handleSubmit=async(e)=>{
        e.preventDefault()
        if(!id){
            try{
                const docRef=collection(db,"categories")
                await addDoc(docRef , {...category,createdAt:Timestamp.now().toMillis()})
                    toast.success("category added")
                    redirect('/admin/view/category')
            }
            catch(error){toast.error(error.message)}
        }
        else {
            try{
                const docRef = doc(db,"categories",id)
                await setDoc(docRef,{...category,createdAt:categoryEdit.createdAt,editedAt:Timestamp.now().toMillis()})
                    toast.success("category updated")
                    redirect('/admin/view/category')
            }
            catch(error){toast.error(error.message)}
        }
       
       
    }
  return (
    <>
        <Card className='mt-4'>
            <Card.Header>
                <h1>{id? "Edit " :"Add "} Category 
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
                    <Button type="submit">{id? "Update" : "Add"} </Button>
                </Form>
            </Card.Body>
        </Card>
    </>
  )
}

export default AddCategory
