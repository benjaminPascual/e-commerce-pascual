import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to='/'>
        <img src='../altamira.png' className='imgNav'></img>
      </Link> 
      <ul className='navLista'>
        <li >
          <NavLink className='itemNav' to='/' >
            Home
          </NavLink>
        </li>
        <li >
          <NavLink className='itemNav' to='/category/vino' >
            Vinos
          </NavLink>
        </li>
        <li >
          <NavLink className='itemNav' to='/category/whisky' >
            Whiskys
          </NavLink>
        </li>
        <li>
          <NavLink className='itemNav' to='/category/gin'>
            Ginebras
          </NavLink>
        </li>
      </ul>
      <Link to='/cart'  className='itemNav'>
        <CartWidget /> 
      </Link>
    </nav>
  )
}

export default NavBar