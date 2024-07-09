import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class Refchild extends Component {
  render() {
    return (
     <>
        <button
            type="button"
            class="btn btn-primary" onClick={()=>{
                alert(this.props.innerRef.current.value)
                this.props.innerRef.current.style.color="blue"
            }}
        >
            Fetch PArent Textbox value
        </button><br/>


        <Form.Control defaultValue={1} ref={this.props.countRef}></Form.Control>
        
     </>
    )
  }
}
