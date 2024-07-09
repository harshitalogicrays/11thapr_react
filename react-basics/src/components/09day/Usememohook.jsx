import React, { useMemo } from 'react'
import { useState } from 'react'

const Usememohook = () => {
    let [count,setCount]=useState(1)
    let [item,setItem]=useState(false)
    let getCount=()=>setCount(count+1)
    let countNumber = (num)=>{
        console.log("countNumber called",num)
        for(let i=0;i<=100000000;i++){}
        return num
    }
    // const checkData = countNumber(count)

    const checkData = useMemo(()=>{return countNumber(count)},[count])
  return (
  <>
    <button type="button"  class="btn btn-primary" onClick={getCount}> Counter  </button>
    <h1>{checkData}</h1> 
    <button  type="button" class="btn btn-primary" onClick={()=>setItem(!item)}>
        {item ? "Clicked" :"Not Clicked"}
    </button>
    
  </>
  )
}

export default Usememohook
