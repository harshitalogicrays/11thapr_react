import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { selectsliders } from '../../redux/sliderSlice'
import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore'
import { db, storage } from '../../firebase/config'
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import productSlice from '../../redux/productSlice'
const AddSlider = () => {
    const redirect=useNavigate()
    let [slider,setSlider]=useState({title:'',desc:'',isActive:false,image:''})
    let [uploadProgress,setUploadProgress]=useState(0)
    let handleImage=(e)=>{
        let file=e.target.files[0]
        const storageRef = ref(storage, `sliders/${Date.now()}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', 
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setUploadProgress(progress)
            }, 
            (error) => {console.log(error)}, 
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                // console.log('File available at', downloadURL);
                setSlider({...slider,image:downloadURL})
              });
            }
          );
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
                const docRef=collection(db,"sliders")
                await addDoc(docRef , {...slider,createdAt:Timestamp.now().toMillis()})
                    toast.success("slider added")
                    redirect('/admin/view/slider')
            }
            catch(error){toast.error(error.message)}
        }
        else {
            if(slider.image != sliderEdit.image){deleteObject(ref(storage,sliderEdit.image))}
            try{
                const docRef=doc(db,"sliders",id)
                await setDoc(docRef , {...slider,createdAt:sliderEdit.createdAt,editedAt:Timestamp.now().toMillis()})
                    toast.success("slider updated")
                    redirect('/admin/view/slider')
            }
            catch(error){toast.error(error.message)}
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
                    {uploadProgress > 0 && 
                    <div class="progress" role="progressbar">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: `${uploadProgress}%`}}>{uploadProgress < 100 ? `uploading ${uploadProgress}%` : `uploaded${uploadProgress}%`  }</div>
                    </div>}
                    <Form.Group className='mb-3'>
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" name="image" onChange={handleImage} ></Form.Control>
                    </Form.Group>
                    {id && <img src={slider.image} width={100} height={100}/>}
                    <br/>
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
