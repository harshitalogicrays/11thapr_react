import React, { useEffect } from 'react'
import {  Card, Table } from 'react-bootstrap'
import useFetchCollection from '../../customhook/useFetchCollection'
import { useDispatch, useSelector } from 'react-redux'
import { selectsliders, store_slider } from '../../redux/sliderSlice'
import { toast } from 'react-toastify'
import Loader from '../Loader'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const ViewSlider = () => {
    const {data,isLoading}=useFetchCollection("slider")
    const dispatch = useDispatch()
  
    useEffect(()=>{
      dispatch(store_slider(data)) 
    },[data])   
  
    const sliders = useSelector(selectsliders)
    // console.log(categories)
  
    let handleDelete=async(id)=>{
      if(window.confirm("Are you sure to delete this??")){
        try{
          await fetch(`${import.meta.env.VITE_BACKEND_URL}/slider/${id}`,{
            method:"DELETE"
          })
          window.location.reload()
          toast.success("slider deleted")
          }
        catch(error){toast.error(error)}
      }
     
    }
    return (
      <>
      {isLoading && <Loader/>}
        <Card className='mt-4'>
              <Card.Header>
                  <h1>View Slider 
                      <Link type="button" class="btn btn-primary float-end btn-lg "  
                      to='/admin/add/slider'>Add Slider</Link>
                  </h1>
              </Card.Header>
              <Card.Body>
              <Table>
          <thead>
          <tr>
          <th>Sr. No</th>
          <th>Title</th>
          <th>Image</th>
          <th>Desc</th>
          <th>status</th>
          <th>Action</th>
          </tr></thead>
        <tbody>
          {sliders.length == 0 && <tr><td colSpan={6}>No Slider Found</td></tr>}
          {sliders.map((c,i)=>
              <tr key={c.id}>
                <td>{i+1}</td>
                <td>{c.title}</td>
                <td><img src={c.image} height={50} width={50}/></td>
                <td>{c.desc}</td>
                <td>{c.isActive ? <span class="badge rounded-pill text-bg-success" >Active</span>
                 :<span class="badge rounded-pill text-bg-danger" >Inctive</span>}</td>
                <td>
                  <Link type="button" class="btn btn-success me-3" to={`/admin/edit/slider/${c.id}`}><FaPenAlt/></Link>
                  
                  <button type="button" class="btn btn-danger" onClick={()=>handleDelete(c.id)}><FaTrashAlt/></button>
                </td>
              </tr>
              )}
        </tbody>
      </Table>
              </Card.Body>
          </Card>
       
      </>
  
  )
}

export default ViewSlider
