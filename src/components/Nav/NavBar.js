import './NavBar.css'
const NavBar = () => {
  return (
    <nav className="navBar">
      <a className='link linkFirst' href="https://www.google.com.ar/">Altamira</a>
      <ul className='navLista'>
        <li>
          <a className='link' href="https://www.google.com.ar/">Home</a>
        </li>
        <li>
          <a className='link' href="https://www.google.com.ar/">Contacto</a>
        </li>
        <li>
          <a className='link' href="https://www.google.com.ar/">Productos</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar