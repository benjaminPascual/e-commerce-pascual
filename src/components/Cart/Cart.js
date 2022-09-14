import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Cart.css'

const Cart = () => {
  const { cart, clearCart, removeItem } = useContext(CartContext);
  
  return (
    <div className="cartContainer">
      {cart.map((prod)=>(
        <div key={prod.id} className="itemCart">
          <h4>{prod.title}</h4>
          <h4>Cantidad: {prod.quantity}</h4>
          <h4>Precio: ${prod.price}</h4>
          <button onClick={()=> removeItem(prod.id)}>Eliminar</button>
        </div>
      ))}
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart