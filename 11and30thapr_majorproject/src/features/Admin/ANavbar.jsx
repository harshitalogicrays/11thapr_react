import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import {  BsArrowLeftCircle, BsHouse } from "react-icons/bs";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_USER, selectIsLoggedIn, selectUserName } from '../../redux/authSlice';

const ANavbar = () => {
  const dispatch=useDispatch()
  const [username,setUsername]=useState('Guest')  
  const data=useSelector(selectUserName)
  const isLoggedIn=useSelector(selectIsLoggedIn)
   useEffect(()=>{
     if(data != null){
       setUsername(data)
     }
     else {
       setUsername('Guest')
     }
   },[isLoggedIn])
 
 
   const navigate=useNavigate()
   let handleLogout=()=>{
       dispatch(LOGOUT_USER())
       toast.success("loggedout successfully")
       navigate('/')    
 }
  return (
    <Navbar expand="lg"  bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#home">mini-project</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to='/admin'   style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "red" : "",
                      backgroundColor: isActive ? "yellow" : "",
                    };
                  }}><BsHouse/> Home</Nav.Link>
                  </Nav>
        <Nav>
            <Nav.Link >Welcome {username}</Nav.Link>
            <Nav.Link onClick={handleLogout}><BsArrowLeftCircle />Logout</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default ANavbar
