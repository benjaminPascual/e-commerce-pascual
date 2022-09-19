import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to='/'  className='itemNav'>
        Altamira
      </Link> 
      <ul className='navLista'>
        <li className='itemNav'>
          <Link to='/category/vino' >
            Vino
          </Link>
        </li>
        <li className='itemNav'>
          <Link to='/category/whisky' >
            Whisky
          </Link>
        </li>
        <li className='itemNav'>
          <Link to='/category/gin'>
            Gin
          </Link>
        </li>
      </ul>
      <Link to='/cart'  className='itemNav'>
        <CartWidget /> 
      </Link>
    </nav>
  )
}

export default NavBar