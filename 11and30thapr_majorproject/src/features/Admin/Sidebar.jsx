import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink ,Link} from 'react-router-dom';
import './Sidebar.css'
const Sidebar = ({ isOpen,onClose}) => {
  console.log(isOpen)
  const sidebarClass = isOpen ? 'sidebar d-block' : 'sidebar d-none';
  
  let mylinks = [
    {as:NavLink,to:'/admin/dash',text:'Dashborad'},
    {as:NavLink,to:'/admin/add/category',text:'Add Category'},
    {as:NavLink,to:'/admin/view/category',text:'View Categories'},
    {as:NavLink,to:'/admin/add/slider',text:'Add Slider'},
    {as:NavLink,to:'/admin/view/slider',text:'View Slider'},
    {as:NavLink,to:'/admin/add/product',text:'Add Product'},
    {as:NavLink,to:'/admin/view/product',text:'View Products'},
    {as:NavLink,to:'/admin/view/orders',text:'View Orders'},
  ]
  return (
  <> 
      
       <div className={sidebarClass}>
       <button type="button" className="btn-close text-reset float-end" onClick={onClose}></button>
  
            <ul className="nav flex-column mt-5">
            {mylinks.map((links,i)=> <li className="nav-item"><Nav.Link as={links.as} to={links.to}  className="nav-link" 
      style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "red" : "",
                      backgroundColor: isActive ? "yellow" : "",
                    };
                  }}>{links.text}</Nav.Link>
  </li>
)}
            
            </ul>
        </div>
    
  </>
  )
}

export default Sidebar
