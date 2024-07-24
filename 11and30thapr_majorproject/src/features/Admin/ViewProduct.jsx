import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import useFetchCollection from '../../customhook/useFetchCollection'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDoc, doc } from 'firebase/firestore'
import { db, storage } from '../../firebase/config'
import { deleteObject, ref } from 'firebase/storage'
import { selectproducts, store_product } from '../../redux/productSlice'

const ViewProduct = () => {
  const {data}=useFetchCollection("products")
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(store_product(data)) 
  },[data])   

  const products = useSelector(selectproducts)
   let handleDelete=(id,image)=>{
    if(window.confirm("Are you sure to delete this??")){
      try{
        const docRef=doc(db,"products",id)
        deleteDoc(docRef)
        image.forEach((imgs)=>deleteObject(ref(storage,imgs)))     
        toast.success("product deleted")
        }
      catch(error){toast.error(error)}
    }
   
  }
  

  return (
   <>
    <h1>View Product</h1>
    <Table>
      <thead><tr><th>Sr. No</th><th>Name</th>
      <th>Image</th>
      <th>Category</th>
      <th>brand</th>
      <th>stock</th>
      <th>price</th>
      <th>Action</th>
      </tr></thead>
      <tbody>
        {products.length == 0 && <tr><td colSpan={8}>No product Found</td></tr>}
        {products.map((product,i)=>
            <tr key={product.id}>
              <td>{i+1}</td>
              <td>{product.name}</td>
              <td><img src={product.image[0]} height={50} width={50}/></td>
              <td>{product.category}</td>
              <td>{product.brand}</td>
              <td>{product.stock}</td>
              <td>{product.price}</td>
              <td>
                <Link type="button" class="btn btn-success me-3" to={`/admin/edit/product/${product.id}`}><FaPenAlt/></Link>
                
                <button type="button" class="btn btn-danger" onClick={()=>handleDelete(product.id,product.image)}><FaTrashAlt/></button>
              </td>
            </tr>
            )}
      </tbody>
    </Table>
   </>
  )
}

export default ViewProduct
