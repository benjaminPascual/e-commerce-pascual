import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import './Cart.css'

const Cart = () => {
  const { cart, clearCart, removeItem, totalPrice } = useContext(CartContext);
  if (cart.length === 0) {
    return <div className="cart">
              <div className="cartContainer">
                <h1>El carrito se encuentra vacio!</h1>
                <Link to={"/"} className="cart"><button>Ir a la tienda</button></Link>
              </div>
            </div>    
  }
  return (
    <div className="cartContainer">
      {cart.map((prod)=>(
        <div key={prod.id} className="itemCart">
          <h4>{prod.title}</h4>
          <h4>Cantidad: {prod.quantity}</h4>
          <h4>Precio: ${prod.price}</h4>
          <button onClick={()=> removeItem(prod.id)}>X</button>
        </div>
      ))}
      <div>
        <h3>total: ${totalPrice()}</h3>
        <button onClick={clearCart}>Vaciar Carrito</button>
      </div>
    </div>
  )
}

export default Cart