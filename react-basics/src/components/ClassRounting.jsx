import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import ClassSidebar from './ClassSidebar'
const ClassRounting = () => {
  return (
    <Row>
                <Col>
                    <ClassSidebar/>
                </Col>
                <Col>
                    <Outlet/>
                </Col>
            </Row>
  )
}

export default ClassRounting
