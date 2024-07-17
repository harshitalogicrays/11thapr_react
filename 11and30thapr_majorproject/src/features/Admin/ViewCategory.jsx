import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { selectCategories, store_category } from '../../redux/categorySlice'
import { Button, Card, Form,Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import useFetchCollection from '../../customhook/useFetchCollection'
import Loader from '../Loader'

const ViewCategory = () => {
  const {data,isLoading}=useFetchCollection("category")
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log("useEffect called")
    dispatch(store_category(data)) //categorySlice
  },[data])

  const categories = useSelector(selectCategories)
  // console.log(categories)

  let handleDelete=async(id)=>{
    if(window.confirm("Are you sure to delete this??")){
      try{
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/category/${id}`,{
          method:"DELETE"
        })
        window.location.reload()
        toast.success("category deleted")
        }
      catch(error){toast.error(error)}
    }
   
  }
  return (
    <>
    {isLoading && <Loader/>}
      <Card className='mt-4'>
            <Card.Header>
                <h1>View Categories 
                    <Link type="button" class="btn btn-primary float-end btn-lg "  
                    to='/admin/add/category'>Add Category</Link>
                </h1>
            </Card.Header>
            <Card.Body>
            <Table>
        <thead>
        <tr>
        <th>Sr. No</th>
        <th>Name</th>
        <th>Desc</th>
        <th>status</th>
        <th>Action</th>
        </tr></thead>
      <tbody>
        {categories.length == 0 && <tr><td colSpan={5}>No category Found</td></tr>}
        {categories.map((c,i)=>
            <tr key={c.id}>
              <td>{i+1}</td>
              <td>{c.name}</td>
              <td>{c.desc}</td>
              <td>{c.isActive ? <span class="badge rounded-pill text-bg-success" >Active</span>
               :<span class="badge rounded-pill text-bg-danger" >Inctive</span>}</td>
              <td>
                <Link type="button" class="btn btn-success me-3" to={`/admin/edit/category/${c.id}`}><FaPenAlt/></Link>
                
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

export default ViewCategory
