import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {  BsArrowLeftCircle, BsHouse } from "react-icons/bs";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_USER, selectIsLoggedIn, selectUserName } from '../../redux/authSlice';

const ANavbar = ({ toggleSidebar }) => {
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
    <>
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
 
  {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button
                    className="btn btn-primary me-2"
                    type="button"
                    onClick={toggleSidebar}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/">Admin Panel</a>
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/users" className="nav-link">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/settings" className="nav-link">Settings</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */}
  </>
  )
}

export default ANavbar
