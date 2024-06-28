import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  let mylinks = [
    {as:NavLink,to:'/admin/dash',text:'Dashborad'},
    {as:NavLink,to:'/admin/add',text:'Add Product'},
    {as:NavLink,to:'/admin/view',text:'View Products'},
  ]
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      {mylinks.map((links,i)=><Nav.Link as={links.as} to={links.to}  
      style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "red" : "",
                      backgroundColor: isActive ? "yellow" : "",
                    };
                  }}>{links.text}</Nav.Link>)}
    
    
  </Nav>
  )
}

export default Sidebar
