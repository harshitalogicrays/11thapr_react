import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const FunRouting = () => {
  return (
            <Row>
                <Col>
                    <Sidebar/>
                </Col>
                <Col>
                    <Outlet/>
                </Col>
            </Row>
  )
}

export default FunRouting
