import React from 'react'
import Products from './products.js'
const ProductList = () => {
    console.log(Products)
  return (
    <>
      {/* {Products.map((product,index)=><p key={product.id}>
            {JSON.stringify(product)}</p>)} */}
      <div class="table-responsive me-4" >
        <table class="table table-bordered table-striped table-hover" >
          <thead>
            <tr>
              <th scope="col">ID</th>  <th scope="col">Name</th>
              <th scope="col">Image</th><th>Brand</th><th>Category</th><th>price</th>
            </tr>  </thead>
          <tbody>
            {Products.length==0 && <tr><td colspan="6">No product found</td></tr>}
            {/* {Products.map((product,index)=>
                <tr key={product.id}>
                  <td scope="row">{product.id}</td>
                  <td>{product.name}</td>
                  <td><img src={product.image} height={50} width={50}/></td>
                  <td scope="row">{product.brand}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                </tr>
            )} */}

{/* {Products.map((product,index)=>{
              return  <tr key={product.id}>
                  <td scope="row">{product.id}</td>
                  <td>{product.name}</td>
                  <td><img src={product.image} height={50} width={50}/></td>
                  <td scope="row">{product.brand}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                </tr>        
    }
)} */}

{Products.map((product,index)=>{
           let{id,name,image,price,brand,category}=product
              return  <tr key={id}>
                  <td scope="row">{id}</td>
                  <td>{name}</td>
                  <td><img src={image} height={50} width={50}/></td>
                  <td scope="row">{brand}</td>
                  <td>{category}</td>
                  <td>{price}</td>
                </tr>        
    }
)}
          </tbody>
        </table>
      </div>
      
    </>
  )
}

export default ProductList
