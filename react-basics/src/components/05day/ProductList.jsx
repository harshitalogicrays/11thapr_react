import React from 'react'
import Products from './products.js'
const ProductList = () => {
    console.log(Products)
  return (
    <>
      {Products.map((product,index)=><p key={product.id}>
            {JSON.stringify(product)}</p>)}
    </>
  )
}

export default ProductList
