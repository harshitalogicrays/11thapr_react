import React, { useState } from 'react'

const Stateinfun = () => {
    // let num1=20,num2=30,result=0
    let [num1]=React.useState(20)
    let [num2]=useState(30)
    let [result,setResult]=useState(0)
    let [name,setName]=useState("Happy")
    let handleAdd=()=>{
        // result = num1+num2 
        setResult(num1+num2)
        setName("Sad")
        console.log(result)
    }
  return (
    <>  <h1>{name}</h1>
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
            Click Me
        </button><br/>

        Num1 = {num1} and Num2 = {num2}<br/>
        Result - {result}
        
    </>
  )
}

export default Stateinfun
