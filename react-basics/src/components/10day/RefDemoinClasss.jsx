import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import Refchild from './Refchild'

export default class RefDemoinClasss extends Component {
    constructor(props) {
      super(props)
      this.state = {username:''}
      this.myRef=React.createRef()
      this.countRef=React.createRef()
    }
    componentDidMount(){ //will get called once componentis completelty loaded in the DOM
        this.myRef.current.focus()
    }
    decrease=()=>{
        if(this.countRef.current.value > 1)
            this.countRef.current.value--
        else this.countRef.current.value=1
    }
  render() {console.log("render called")
    return (
     <>
        {/* <Form.Control value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}></Form.Control> */}
        <Form.Control ref={this.myRef}></Form.Control>
        <Refchild innerRef = {this.myRef} countRef={this.countRef} />

        <button type="button" onClick={this.decrease}>-</button>
        <button type="button" onClick={()=>this.countRef.current.value++}>+</button>
     </>
    )
  }
}
