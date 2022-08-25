import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav className="navBar">
      <a className='link' href="https://www.facebook.com.ar/">Altamira</a>
      <ul className='navLista'>
        <li>
          <a className='li' href="https://www.google.com.ar/">Home</a>
        </li>
        <li>
          <a className='li' href="https://www.google.com.ar/">Contacto</a>
        </li>
        <li>
          <a className='li' href="https://www.google.com.ar/">Productos</a>
        </li>
      </ul>
      <CartWidget /> 
    </nav>
  )
}

export default NavBar