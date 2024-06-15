import React from 'react'
import { Form } from 'react-bootstrap'

const ForwardRefdemo = React.forwardRef((props,ref) => {
  return (
   <>
    <Form.Control ref={ref} defaultValue={props.username}></Form.Control>
   </>
  )
})

export default ForwardRefdemo
