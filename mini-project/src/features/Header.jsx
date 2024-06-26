import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { BsArrowLeftCircle, BsHouse } from "react-icons/bs";
import { FaLock, FaPenAlt } from 'react-icons/fa';
import { Logout, ShowOnLogin, ShowOnLogout } from './hiddenlinks';
const Header = () => {
  const [username,setUsername]=useState('Guest')
  useEffect(()=>{
    if(sessionStorage.getItem("11aprmini") != null){
      let obj =JSON.parse(sessionStorage.getItem("11aprmini"))
      console.log(obj)
      setUsername(obj.name)
    }
    else {
      setUsername('Guest')
    }
  },[sessionStorage.getItem("11aprmini")])

  return (
    <Navbar expand="lg"  bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#home">mini-project</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to='/'   style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "red" : "",
                      backgroundColor: isActive ? "yellow" : "",
                    };
                  }}><BsHouse/> Home</Nav.Link>
          <Nav.Link as={NavLink} to='/products'   style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "red" : "",
                      backgroundColor: isActive ? "yellow" : "",
                    };
                  }}>Products</Nav.Link>
        </Nav>
        <Nav>
          <ShowOnLogout>
                <Nav.Link as={NavLink} to='/login'   style={({ isActive}) => {
                          return {
                            fontWeight: isActive ? "bold" : "",
                            color: isActive ? "red" : "",
                            backgroundColor: isActive ? "yellow" : "",
                          };
                        }}><FaLock/> Login</Nav.Link>
                <Nav.Link as={NavLink} to='/register'   style={({ isActive}) => {
                          return {
                            fontWeight: isActive ? "bold" : "",
                            color: isActive ? "red" : "",
                            backgroundColor: isActive ? "yellow" : "",
                          };
                        }}><FaPenAlt/> Register</Nav.Link>
          </ShowOnLogout>
          <ShowOnLogin>
            <Nav.Link >Welcome {username}</Nav.Link>
           <Nav.Link><Logout/></Nav.Link>
          </ShowOnLogin>
        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
