import React from 'react'
import products from '../assets/products.js'
import ProductItems from './ProductItems'
const ProductData = () => {
  return (
   <>
    <ProductItems products={products}/>
   </>
  )
}

export default ProductData
