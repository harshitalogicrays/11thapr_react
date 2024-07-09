import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class EventinClass extends Component {

    handleClick=()=>{
        alert("button clicked")
    }
    handleClick1=(a,b)=>{
        alert(`button clicked ${a+b}`)
    }
  render() {
    let {username,address}=this.props
    return (
     <>
        {username}
        <Button variant='dark me-2' onClick={()=>alert("button clicked")}>Click Me</Button> 
        <Button variant='dark me-2' onClick={this.handleClick}>Click Me</Button> 
        <Button variant='dark me-2' onClick={()=>this.handleClick1(2,3)}>add</Button> 
    </>
    )
  }
}
