import React, { Component } from 'react'
import products from '../05day/products.js'
import ProductItems from '../06day/ProductItems'
export default class StateinClass extends Component {
    constructor(props) {
      super(props)
      this.state = {email:'abc@gmail.com',isLoggedIn:false,mobile:9087654321,products:[...products],
        count:''
      }
    }
    
  render() {
    return (
      <>
            <button type="button"  class="btn btn-primary" onClick={()=>this.setState({count:parseInt(this.state.count+1)})}  >
                Counter
            </button>
            <h1>{this.state.count}</h1>

        <h1>{this.state.email}</h1>
        <button type="button" class="btn btn-primary" 
        onClick={()=>this.setState({isLoggedIn:!this.state.isLoggedIn})}>
            Click Me
        </button>
        <br/>
        {this.state.isLoggedIn ? "already loggedIn" : "Please login"}<br/>

        {/* {JSON.stringify(products)} */}

        <ProductItems products={products}/>
      </>
    )
  }
}
