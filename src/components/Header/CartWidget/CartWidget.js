import React from 'react'
import { useContext } from 'react'
import {CgShoppingCart} from 'react-icons/cg'
import { CartContext } from '../../../context/CartContext'

const CartWidget = () => {

  const {totalQuantity} = useContext(CartContext)

  return (
    <div className="cartWidget">
        <CgShoppingCart size={25} color="black" />
        <h4 className="cartNum">{totalQuantity() === 0 ? " " : totalQuantity()}</h4>
    </div>
  )
}

export default CartWidget