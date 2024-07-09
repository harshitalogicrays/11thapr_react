import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <>      
      <ul class="nav flex-column">
            <li class="nav-item">
                <NavLink class="nav-link" aria-current="page" to='/fun'  className="ms-3 text-decoration-none"
                style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "red" : "",
                      backgroundColor: isActive ? "yellow" : "",
                    };
                  }}>props</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to='/fun/state' className="ms-3 text-decoration-none"
                style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "red" : "",
                      backgroundColor: isActive ? "yellow" : "",
                    };
                  }}>state</NavLink>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/fun/event'>event</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/fun/condition'>conditional rendering</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/fun/form'>form</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/fun/product/form'>Product Form</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/fun/list'>List Rendering</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/fun/products'>Products</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/fun/products/card'>Products in card</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/fun/css'>CSS</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/fun/rb'>React Bootstrap Form</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/fun/validations'>Form Validations</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/fun/reacthookform'>React Hook Form Validations</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/fun/lifting'>Lifting the state up</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/fun/random'>useCallback,useEffect and useRef demo</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/fun/ref'>uncontrolled component</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/fun/hook/usememo'>useMemo Hook</Link>
            </li>
    </ul>
    </>
  )
}

export default Sidebar
