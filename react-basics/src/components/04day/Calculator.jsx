import React, { useState } from 'react'

const Calculator = () => {
    let [num1,setNum1]=useState('')
    let [num2,setNum2]=useState('')
    let [result,setResult]=useState('')
    let handleCal=(op)=>{
        setResult(eval(num1+op+num2))
    }
  return (
    <>
      <div className="container col-6 ">  
            <div className="mb-3">
                <label htmlFor="" className="form-label">Number1</label>
                <input type="text"  name="num1" className="form-control" value={num1}
                onChange={(e)=>setNum1(e.target.value)}/>
            </div>
        <div className="mb-3">
                <label htmlFor="" className="form-label">Number2</label>
                <input type="text"  name="num2" className="form-control"  value={num2}
                onChange={(e)=>setNum2(e.target.value)}/>
        </div>
        <button type="button" class="btn btn-primary me-2" onClick={()=>handleCal('+')}> + </button>
        <button type="button" class="btn btn-primary me-2" onClick={()=>handleCal('-')}> - </button>
        <br/>
        <h1>{result}</h1>
        </div>
    </>
  )
}

export default Calculator
