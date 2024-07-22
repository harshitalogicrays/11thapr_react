import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { db } from '../firebase/config'
//custom hook
const useFetchCollection = (collectionname) => {
    const [data,setData]=useState([])
    const [isLoading,setIsLoading]=useState(false)
   
    useEffect(()=>{fetchData()},[])

    let fetchData=async()=>{
        setIsLoading(true)
        try{
            const docRef=collection(db,collectionname)
            const q = query(docRef, orderBy("createdAt",'desc'));
            onSnapshot(q, (querySnapshot) => {
              let allData = querySnapshot.docs.map((doc) => ({...doc.data(),id:doc.id})
            )
              setData(allData)
            });
            setIsLoading(false)
            
        }
        catch(error){
            setIsLoading(false)
          toast.error(error.message)
        }
    }
  return (
    {data,isLoading}
  )
}
export default useFetchCollection
