import React, { useEffect, useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Childrenforref from './Childrenforref'
import ForwardRefdemo from './ForwardRefdemo'

const RefDemoinFun = () => {
    const focusRef=useRef()
    const countRef = useRef()
    const innerRef =useRef()
    const MyRef = useRef()

    useEffect(()=>{
        focusRef.current.focus()},[])
    let handleData=()=>{
        alert(focusRef.current.value)
        focusRef.current.style.color="red"}

    let handleMinus=()=>{
        if(countRef.current.value>1) countRef.current.value--
        else countRef.current.value=1  }
  return (
    <> <Container className='mt-5'>
        <Form.Control ref={focusRef}></Form.Control>
        <Button onClick={handleData} className='mt-3 mb-3'>Click Me</Button><br/>


        <button onClick={handleMinus}>-</button>
        <input style={{width:'40px',textAlign:'center'}} defaultValue={1} ref={countRef}></input>
        <button type="button" onClick={()=>countRef.current.value++}>+</button>

<br/><br/>
         <Form.Control ref={innerRef}></Form.Control>
         <Childrenforref refprop={innerRef}/><br/>

         <ForwardRefdemo username="Ram" ref={MyRef}/>
    </Container>
    </>
  )
}

export default RefDemoinFun
