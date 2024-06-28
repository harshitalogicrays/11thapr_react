import React, { useEffect, useState } from 'react'
// import products from '../assets/products.js'
import ProductItems from './ProductItems'
import { fetchdata } from './Admin/productapi'
const ProductData = () => {
  const [products,setProducts]=useState([])
  let getData=async()=>{
    try{
      let res = await fetchdata()
       setProducts(res.data)
    }
    catch(err){toast.error(err)} 
  }

  useEffect(()=>{getData()},[])

  return (
   <>
    <ProductItems products={products}/>
   </>
  )
}

export default ProductData
