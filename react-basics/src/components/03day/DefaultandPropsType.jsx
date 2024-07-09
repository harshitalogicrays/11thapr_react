import React from 'react'
import propTypes from 'prop-types'
const DefaultandPropsType = ({name,address="Pune",pincode}) => {
  return (
    <>
        <h1>Name: {name}</h1>
        <h2>{address}</h2>
        <h3>{pincode}</h3>
    </>
  )
}

// DefaultandPropsType.defaultProps={
//     name:'Guest'
// }

DefaultandPropsType.propTypes={
    name:propTypes.string,
    pincode:propTypes.number
}
export default DefaultandPropsType
