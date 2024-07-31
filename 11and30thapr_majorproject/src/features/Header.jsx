import React, { useEffect, useState,useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link, NavLink, useNavigate } from 'react-router-dom';
import { BsArrowLeftCircle, BsHouse } from "react-icons/bs";
import { FaLock, FaPenAlt, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_USER, LOGOUT_USER, selectIsLoggedIn, selectUserName, selectUserRole } from '../redux/authSlice';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { ShowOnLogin, ShowOnLogout } from './hiddenlinks';
import { selectCartItems } from '../redux/cartSlice';
import useFetchCollection from '../customhook/useFetchCollection';
import { FILTER_BY_SEARCH } from '../redux/filterSlice';
const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const  username=useSelector(selectUserName)
  const role=useSelector(selectUserRole)
  const isLoggedIn=useSelector(selectIsLoggedIn)
  useEffect(()=>{
    onAuthStateChanged(auth, async(user) => {
      if (user) {
       const uid = user.uid;
       const docRef = doc(db,"users",uid)
       const docSnap = await getDoc(docRef)
       let obj={email:docSnap.data().email,name:docSnap.data().username,role:docSnap.data().role,id:uid}
       dispatch(LOGIN_USER(obj))
      } else {
       dispatch(LOGOUT_USER())
      }
    });
  },[auth])

  let handleLogout=()=>{
      signOut(auth).then(() => {
        toast.success("loggedout successfully")
        navigate('/')  
      }).catch((error) => {
        toast.error(error.message)
      });
       
}

const cartItems=useSelector(selectCartItems)


//search 
const {data:products}=useFetchCollection("products")
let [search,setSearch]=useState('')
let handleSearch=(e)=>{
  e.preventDefault()
  dispatch(FILTER_BY_SEARCH({products,search}))
  navigate('/products')
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
        <Nav className="me-auto">
          {(role=='0' && isLoggedIn) &&
          <Button variant="danger" as={Link} to='/admin'>Admin Panel</Button>}
        </Nav>
        <Form inline>
        <InputGroup>
              <Form.Control type="search" placeholder="Search"  name="search" value={search}
              onChange={(e)=>setSearch(e.target.value)}/>
              <Button variant="danger" onClick={handleSearch}><FaSearch/></Button>
          </InputGroup>            
          </Form>

        <Nav>
       
        <Nav.Link as={NavLink} to='/cart'><FaShoppingCart size={30}/><span
              class="badge rounded-pill text-bg-danger">{cartItems.length}</span>
        </Nav.Link>
          <ShowOnLogin>
            {role=="1" && <Nav.Link as={NavLink} to='/myorders'>My Orders</Nav.Link>}
          
           <Nav.Link >Welcome {username}</Nav.Link>
           <Nav.Link onClick={handleLogout}><BsArrowLeftCircle />Logout</Nav.Link>
           </ShowOnLogin>
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
        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
