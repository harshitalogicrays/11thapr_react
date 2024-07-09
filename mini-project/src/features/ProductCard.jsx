import React from 'react'
import { useContext } from 'react'
import { MyContext } from './ContextData'

const ProductCard = ({product}) => {
  const data = useContext(MyContext)
  let handleClick=()=>{
      data.addtocart(product)
  }
  return (
    <div className='col-3'>
        <div class="card">
            <img class="card-img-top" src={product.image} alt={product.name} height={200}/>
            <div class="card-body">
                <h4 class="card-title">{product.name}</h4>
                <p class="card-text">{product.category}</p>
                <p class="card-text">{product.brand}</p>
                <p class="card-text">{product.price}</p>
                <button type="button"class="btn btn-primary" onClick={handleClick}> Add to cart
                </button>               
            </div>        </div>      
    </div>
  )
}

export default ProductCard
