import React, { Component } from 'react'

export default class ClassComp extends Component {
  render() {
    return (
      <>
        <h1>{this.props.username}</h1>
        <h2>{this.props.address}</h2>
      </>
    )
  }
}
