import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectproducts } from '../redux/productSlice'
import { ADD_TO_CART, DECREASE, selectCartItems } from '../redux/cartSlice'
import ImageThumbnail from './ImageThumbnail'

const ProductDetails = () => {
    const dispatch=useDispatch()
    const {id}=useParams()
    const products=useSelector(selectproducts)
    const product=products.find(item=>item.id==id)
    const cartItems = useSelector(selectCartItems)
    const item=cartItems.find(item=>item.id==id)
    const itemIndex=cartItems.findIndex(item=>item.id==id)
  return (
    <div className='container mt-5 p-2 shadow'>
      <div className="row">
        <div className="col">
            {/* <img src={product.image[0]} className='img-fluid'/> */}
            <ImageThumbnail imgs={product.image}/>
        </div>
        <div className='col'>
        {product.stock > 0 ? 
                <span class="badge rounded-pill text-bg-success float-end">In Stock</span  >
                :
                <span class="badge rounded-pill text-bg-danger float-end">Outof Stock</span  >
                }
                <h4>{product.category}</h4>
                <h3>{product.name}</h3>
                <h4>{product.brand}</h4>
                <p>{product.desc}</p>
                {itemIndex == -1 ? 
                 <button type="button"class="btn btn-primary"
                 onClick={()=>dispatch(ADD_TO_CART(product))}>Add to cart
                </button>      
                :
                <>
                <button onClick={()=>dispatch(DECREASE(item))}>-</button>
                <input type="text" value={item.qty} style={{width:'40px',textAlign:'center'}}/>
                <button onClick={()=>dispatch(ADD_TO_CART(item))}>+</button>
                </>

            }
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
