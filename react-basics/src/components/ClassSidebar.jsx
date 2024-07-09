import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const ClassSidebar = () => {
  return (
    <ul class="nav flex-column">
            <li class="nav-item">
                <NavLink class="nav-link" aria-current="page" to='/class'  className="ms-3 text-decoration-none"
                style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "red" : "",
                      backgroundColor: isActive ? "yellow" : "",
                    };
                  }}>props</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to='/class/state' className="ms-3 text-decoration-none"
                style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "red" : "",
                      backgroundColor: isActive ? "yellow" : "",
                    };
                  }}>state</NavLink>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/class/event'>event</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/class/form'>form</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/class/ref'>ref</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/class/lifecycle'>Life Cycle Methods</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/class/pure'>Pure Component</Link>
            </li>
           
    </ul>
  )
}

export default ClassSidebar
