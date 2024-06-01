import React, { useState } from 'react'

const CounterApp = () => {
    let [count,setCount]=useState('')// state is private and local for the component
    let increaseCount=()=>{
        setCount(parseInt(count+1)) //''+1 => '1' , '1'+1 => '11'
    }
    let decreaseCount=()=>{
        if(count > 1){
            // setCount(parseInt(count-1)) //count -=1
            setCount((prev)=>parseInt(prev-1)) //count -=1
        }
        else 
            setCount(1)
    }   
  return (
    <>
    <button type="button" class="btn btn-primary me-2" onClick={increaseCount}>Increase</button>
    <button type="button" class="btn btn-primary me-2" onClick={decreaseCount}>Decrease</button>
    <h1>{count}</h1>
    </>
  )
}
export default CounterApp
