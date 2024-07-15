import React, { useState } from 'react'
import { toast } from 'react-toastify'
export const MyContext =  React.createContext()

const ContextData = ({children}) => {
    let [cartItems,setCartItems]=useState([])
    let [total,setTotal]=useState(0)
    let addtocart=(product)=>{
      if(sessionStorage.getItem('11aprmini') == null){
        toast.error("please login first") }
      else {
          const itemIndex= cartItems.findIndex((item)=>item.id==product.id)
          if(itemIndex == -1){
            setCartItems([...cartItems,{...product,qty:1}])
            toast.success(`${product.name } added to cart`)
          }
          else {toast.info(`${product.name } already added to cart`)}         }  }
    let increase=(product)=>{
      const itemIndex= cartItems.findIndex((item)=>item.id==product.id)
      if(itemIndex != -1){
        if(cartItems[itemIndex].qty < product.stock)
            cartItems[itemIndex].qty++
        else toast.info(`only ${product.stock} available`)
      }
      setCartItems([...cartItems])
    }
    let decrease=(product)=>{
      const itemIndex= cartItems.findIndex((item)=>item.id==product.id)
      if(itemIndex != -1){
        if(cartItems[itemIndex].qty > 1)
            cartItems[itemIndex].qty--
        else cartItems[itemIndex].qty=1}
      setCartItems([...cartItems])
    }
    let removefromcart=(id)=>{
      // const filters = cartItems.filter(item=>item.id !=id)
      // setCartItems(filters)

      const itemIndex= cartItems.findIndex((item)=>item.id==id)
      cartItems.splice(itemIndex,1)
      setCartItems([...cartItems])
    }
    let emptycart=()=>{
      setCartItems([]);setTotal(0)
    }
    let calculate_total=()=>{
     let t = cartItems.reduce((prev,curr)=>{return prev+(curr.price*curr.qty)},0)
     setTotal(t)
    }
    //prev=0 curr = 1000*1 => 1000
    //prev=1000 , curr = 2000*3=> 7000
    //prev=7000 , curr = 3000*1 => 10000
  return (
   <>
    <MyContext.Provider value={{cartItems,total,addtocart,increase,decrease,removefromcart,emptycart,calculate_total}}>
        {children}
    </MyContext.Provider>
   </>
  )
}

export default ContextData
