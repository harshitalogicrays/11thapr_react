import React, { useCallback, useEffect, useState } from 'react'

const RandomNumGenerator = () => {
    let [password,setPassword]=useState()
    let [length,setLength] =useState(8)
    let [numAllowed,setNumAllowed]=useState(false)
    let [charAllowed,setCharAllowed]=useState(false)
    let copyRef = React.useRef()
    // let generateNum = ()=>{
    //     let str = `abcdefghijklmnopqrstuvwxyzABCEDEFGHIJKLMNOPQRSTUVWXYZ`
    //     if(numAllowed) {str += '0987654321'}
    //     if(charAllowed){str+='!@#$%^&*-_+=.'}
    //     let data = ''
    //     for(let i=1;i<=length;i++){
    //         data += str.charAt(Math.floor(Math.random()*str.length))
    //     }
    //     setPassword(data)
    // }

    let generateNum = useCallback(()=>{
        let str = `abcdefghijklmnopqrstuvwxyzABCEDEFGHIJKLMNOPQRSTUVWXYZ`
        if(numAllowed) {str += '0987654321'}
        if(charAllowed){str+='!@#$%^&*-_+=.'}
        let data = ''
        for(let i=1;i<=length;i++){
            data += str.charAt(Math.floor(Math.random()*str.length))
        }
        setPassword(data)
    },[length,numAllowed,charAllowed]);
   
    let handleCopy=()=>{
        // console.log(copyRef.current.value)
        copyRef.current.select()
        copyRef.current.setSelectionRange(0,5)
        copyRef.current.style.backgroundColor='aqua'
        window.navigator.clipboard.writeText(password)
    }


    // useEffect(()=>{ //[] => empty dependency means this useEffect will get call only at the time of component loading
    //     generateNum()
    // },[])

    useEffect(()=>{
        generateNum()
    },[length,numAllowed,charAllowed])
  return (
    <div className='container mt-5 col-6 p-3'>
    <div className="input-group">
    <input type="text" className='form-control' value={password} ref={copyRef}/>
    <button  type="button" class="btn btn-primary" onClick={handleCopy}>   copy </button>
    
    </div>
       <br/>
        <input type="range" value={length} min="5" max="100" 
        onChange={(e)=>setLength(e.target.value)} /> length ({length}) {"  "}
        <input type="checkbox" value={numAllowed} onClick={()=>setNumAllowed(!numAllowed)}/>Numbers
        {"  "}
        <input type="checkbox" value={charAllowed} onClick={()=>setCharAllowed(!charAllowed)}/>Characters
    </div>
  )
}

export default RandomNumGenerator
