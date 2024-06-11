import React from 'react'
import Image1 from '../../assets/login.png'
import Container  from 'react-bootstrap/Container'
import { Button, Col, Form, Image, Row } from 'react-bootstrap'
import { MyButton, TextBox } from './styledcomponent.js'
import MycustomButton from './MycustomButton.jsx'
const ReactBootstrapForm = () => {
  let handleClick=()=>alert("button clicked")
  return (
    <>
      <Container>
    
    <MycustomButton class1="btn-danger" click={handleClick}/>

    <MycustomButton click={()=>alert("kfkhetehth")} style={{borderRadius:'30px'}}>
        Custom Button
    </MycustomButton>

    <MycustomButton class1="btn-info ms-2" size="lg" disabled >Disabled Button</MycustomButton>

        <Row>
            <Col><Image src={Image1} fluid/></Col>
            <Col>
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email"/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password"/>
                    </Form.Group>
                    <Button type="submit" variant='danger'>Submit</Button>
                </Form>
            </Col>
        </Row>
        <hr/>

      <MyButton>Button</MyButton>
      <TextBox className='form-control' type="date"/>

      </Container>
    </>
  )
}

export default ReactBootstrapForm
