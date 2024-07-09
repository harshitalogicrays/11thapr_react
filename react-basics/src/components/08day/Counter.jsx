import React from 'react'
import { useState } from 'react'
import Increase from './Increase'

const Counter = () => {
    let [count,setCount]=useState('')
    let increase =(v)=>{
        setCount(parseInt(count+v))
    }

    let decrease =(v)=>{
        if(count > 1)
          setCount(parseInt(count-v))
      else
        setCount(1) 
    }
  return (
  <>
        <Increase increase={increase} decrease={decrease}/>
        <hr/>
        <h1>{count}</h1>
  </>
  )
}

export default Counter
