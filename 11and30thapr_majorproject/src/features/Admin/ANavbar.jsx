import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {  BsArrowLeftCircle } from "react-icons/bs";
import { toast } from 'react-toastify';
import {  useSelector } from 'react-redux';
import { selectUserName } from '../../redux/authSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';

const ANavbar = ({ toggleSidebar }) => {
  const username=useSelector(selectUserName)
 
   const navigate=useNavigate()
   let handleLogout=()=>{
      signOut(auth).then(() => {
        toast.success("loggedout successfully")
        navigate('/')  
      }).catch((error) => {
        toast.error(error.message)
      });
 }
  return (
    <>

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button
                    className="btn btn-primary me-2"
                    type="button"
                    onClick={toggleSidebar}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to='/admin'>Admin Panel</Link>
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link">Welcome {username}</a>
                        </li>
                        <li className="nav-item">
                        <button className="nav-link" onClick={handleLogout}>
                        <BsArrowLeftCircle />Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  </>
  )
}

export default ANavbar
