import React, { Component } from 'react'
import Image1 from '../../assets/register.png'
export default class Form1classcomp extends Component {
    constructor(props) {
      super(props)    
      this.state = {
        user:{username:'',email:'',password:'',cpassword:''}
      }
    }
    handleChange=(e)=>{
        this.setState({
            user:{...this.state.user, [e.target.name]:e.target.value}
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        alert(JSON.stringify(this.state.user))
    }
  render() {
    return (
        <div className='container'>
        <div className="row">
            <div className="col">
                <img src={Image1}  className='img-fluid'/>
            </div>
            <div className="col">
                <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Username</label>
                    <input type="text"  name="username" className="form-control"
                    value={this.state.user.username} onChange={(e)=>this.setState({
                        user:{...this.state.user, username:e.target.value}
                    })}/>
                 </div>
                 <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text"  name="email" className="form-control"
                     value={this.state.user.email} onChange={this.handleChange}/>
                 </div>
                 <div className="mb-3">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password"  name="password" className="form-control"
                     value={this.state.user.password} onChange={this.handleChange}/>
                 </div>
                 <div className="mb-3">
                    <label htmlFor="" className="form-label">Confirm Password</label>
                    <input type="password"  name="cpassword" className="form-control"
                     value={this.state.user.cpassword} onChange={this.handleChange}/>
                 </div>
                 <button type="submit" class="btn btn-primary"  >Submit  </button>
                 
                </form>
            </div>
        </div>
    </div>
    )
  }
}
