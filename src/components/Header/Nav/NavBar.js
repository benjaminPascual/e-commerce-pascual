import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to='/' >
        Altamira
        
      </Link> 
      <ul className='navLista'>
        <li>
          <Link to='/category/vino'>
            Vino
          </Link>
        </li>
        <li>
          <Link to='/category/whisky'>
            Whisky
          </Link>
        </li>
        <li>
          <Link to='/category/gin'>
            Gin
          </Link>
        </li>
      </ul>
      <Link to='/cart' >
        <CartWidget /> 
      </Link>
    </nav>
  )
}

export default NavBar