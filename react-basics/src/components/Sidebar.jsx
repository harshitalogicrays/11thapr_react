import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <>      
      <ul class="nav flex-column">
            <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/'>props</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/state'>state</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/event'>event</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/condition'>conditional rendering</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/form'>form</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/list'>List Rendering</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/products'>Products</Link>
            </li>
    </ul>
    </>
  )
}

export default Sidebar
