import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
//custom hook
const useFetchCollection = (collectionname) => {
    const [data,setData]=useState([])
    const [isLoading,setIsLoading]=useState(false)
   
    useEffect(()=>{fetchData()},[])

    let fetchData=async()=>{
        setIsLoading(true)
        try{
            let res = await  fetch(`${import.meta.env.VITE_BACKEND_URL}/${collectionname}`)
            let d = await res.json()
            setData(d)
            setIsLoading(false)
            
        }
        catch(error){
            setIsLoading(false)
          toast.error(error)
        }
    }
  return (
    {data,isLoading}
  )
}
export default useFetchCollection
