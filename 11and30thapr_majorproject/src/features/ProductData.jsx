import React, { useEffect, useState } from 'react'
import ProductItems from './ProductItems'
const ProductData = () => {
  const [products,setProducts]=useState([])
 
  return (
   <>
    <ProductItems products={products}/>
   </>
  )
}

export default ProductData
