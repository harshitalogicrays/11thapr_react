import React, { useEffect, useState,useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { BsArrowLeftCircle, BsHouse } from "react-icons/bs";
import { FaLock, FaPenAlt, FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_USER, selectIsLoggedIn, selectUserName, selectUserRole } from '../redux/authSlice';
const Header = () => {
  const dispatch=useDispatch()
 const [username,setUsername]=useState('Guest')
 const data=useSelector(selectUserName)
 const isLoggedIn=useSelector(selectIsLoggedIn)
const role=useSelector(selectUserRole)
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

        {role != '0' &&   <Nav.Link as={NavLink} to='/cart'><FaShoppingCart size={30}/><span
              class="badge rounded-pill text-bg-danger">{0}</span>
        </Nav.Link>}
          {isLoggedIn ? 
          <>
           <Nav.Link >Welcome {username}</Nav.Link>
           <Nav.Link onClick={handleLogout}><BsArrowLeftCircle />Logout</Nav.Link>
          </>      
          :
          <>
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

          </>
          }
               
          
        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
