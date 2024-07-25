import React, { useEffect, useState } from 'react'
import ProductItems from './ProductItems'
import products from '../assets/products.js'
import {Row, Col, Container, Form } from 'react-bootstrap'
import useFetchCollection from '../customhook/useFetchCollection.js'
import { useDispatch, useSelector } from 'react-redux'
import { selectproducts, store_product } from '../redux/productSlice.js'
import { FILTER_BY_CATEGORY, selectCalVal, selectFilterProducts, selectSearchVal } from '../redux/filterSlice.js'
const ProductData = () => {
  const {data:categories}=useFetchCollection("categories")
  const {data}=useFetchCollection("products")
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(store_product(data)) 
  },[data])   

  const products = useSelector(selectproducts)

  //filter by category
  const [category,setCategory]=useState('')
  useEffect(()=>{
      dispatch(FILTER_BY_CATEGORY({products,category}))
  },[category])

  const filterProducts=useSelector(selectFilterProducts)
  const catval=useSelector(selectCalVal)
  const searchval=useSelector(selectSearchVal)
  // console.log(catval,filterProducts)
  return (
   <>
   <Container className="mt-5">
    <Row>
      <Col xs={3}>   
          <Form.Select value={category} name="category" onChange={(e)=>setCategory(e.target.value)}>
          <option value='' selected disabled>select category</option>
          {categories.map((c,i)=>  <option key={c.id}>{c.name}</option>)}
        </Form.Select>
      </Col>
      <Col xs={{span:'3',offset:'6'}}>
        <Form.Select>
        <option value='' selected disabled>Sort By:</option>
        <option value="htol">High to Low</option>
        <option value="ltoh">Low to High</option>
      </Form.Select>
      </Col>
    </Row>  
  
    <>
      {(catval !='' || searchval !='') ? <>
              {
                filterProducts.length==0 ? <h1>No product found</h1> :
                <ProductItems products={filterProducts}/>
              }
      </> :<> <ProductItems products={products}/></>}
    </>
    </Container>
   </>
  )
}

export default ProductData
