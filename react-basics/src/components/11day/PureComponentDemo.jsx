import React, { PureComponent } from 'react'
import { Button } from 'react-bootstrap'

export default class PureComponentDemo extends PureComponent {
    constructor(props) {
        super(props)
      console.log("constructor called")
        this.state = {username:"ram" }
      }
      handleClick=()=>{
        console.log("handleClick called")
        this.setState({username:"Meera"})
    }
  render() {
    console.log("render called")
    return (
      <div>
         <h1>{this.state.username}</h1>
         <Button onClick={this.handleClick}>Change Name</Button>   
      </div>
    )
  }
}
