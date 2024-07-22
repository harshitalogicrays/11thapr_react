import React, { useEffect, useState } from 'react'
import ProductItems from './ProductItems'
import products from '../assets/products.js'
import {Row, Col, Container, Form } from 'react-bootstrap'
import useFetchCollection from '../customhook/useFetchCollection.js'
const ProductData = () => {
  const {data:categories}=useFetchCollection("categories")
  return (
   <>
   <Container className="mt-5">
    <Row>
      <Col xs={3}>   
          <Form.Select>
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
    </Container>
    <ProductItems products={products}/>
   </>
  )
}

export default ProductData
