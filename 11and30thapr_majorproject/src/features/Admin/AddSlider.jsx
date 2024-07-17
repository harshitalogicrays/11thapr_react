import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { selectsliders } from '../../redux/sliderSlice'
const AddSlider = () => {
    const redirect=useNavigate()
    let [slider,setSlider]=useState({title:'',desc:'',isActive:false,image:''})
    let handleImage=(e)=>{
        let file=e.target.files[0]
        let reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>{
            setSlider({...slider,image:reader.result})
        }
    }

    //edit
    const {id}=useParams()
    const sliders = useSelector(selectsliders)
    const sliderEdit = sliders.find(item=>item.id==id)
    useEffect(()=>{
        if(id){ setSlider({...sliderEdit})}
        else {
            setSlider({title:'',desc:'',isActive:false,image:''})}
    },[id])
    let handleSubmit=async(e)=>{
        e.preventDefault()
        if(!id){
            try{
                await fetch(`${import.meta.env.VITE_BACKEND_URL}/slider`,{
                    method:"POST",
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify({...slider,createdAt:Date.now()})
                     }) 
                    toast.success("sldier added")
                    redirect('/admin/view/slider')
            }
            catch(error){toast.error(error)}
        }
        else {
            try{
                await fetch(`${import.meta.env.VITE_BACKEND_URL}/slider/${id}`,{
                    method:"PUT",
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify({...slider,createdAt:sliderEdit.createdAt,editedAt:Date.now()})
                     }) 
                    toast.success("slider updated")
                    redirect('/admin/view/slider')
            }
            catch(error){toast.error(error)}
        }

    }
  return (
    <Card className='mt-4'>
            <Card.Header>
                <h1>{id? "Edit ":"Add "} Slider
                    <Link type="button" class="btn btn-primary float-end btn-lg "  
                    to='/admin/view/slider'>View Slider</Link>
                </h1>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control name="title" value={slider.title} 
                        onChange={(e)=>setSlider({...slider,title:e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name="desc" value={slider.desc} 
                        onChange={(e)=>setSlider({...slider,desc:e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" name="image" onChange={handleImage} ></Form.Control>
                    </Form.Group>
                    <div class="form-check-inline mb-3">                
                    <label class="form-check-label me-2">status: </label>
                    <input class="form-check-input" type="radio" name="isActive" 
                         onClick={(e)=>setSlider({...slider,isActive:!slider.isActive})} 
                         checked={slider.isActive}
                   />
                    </div><br/>
                    <Button type="submit">{id? "Update" :"Add"} </Button>
                </Form>
            </Card.Body>
        </Card>
  )
}

export default AddSlider
