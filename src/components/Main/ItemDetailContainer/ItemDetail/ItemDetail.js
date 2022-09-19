import React, { useContext, useState } from 'react'
import ItemCount from '../../Counter/ItemCount';
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../../context/CartContext';

const ItemDetail = ({product}) => {
  const [cantidad, setCantidad] = useState(0);
  const { addToCart, getProductQuantity } = useContext(CartContext);

  const onAdd = (count)=>{ 
    setCantidad(count)
    addToCart(product, count)
  };
  const quantity = getProductQuantity(product.id)

  return (
    <div className="container">
      <div className="images">
        <img src={product.img} className="imgDetail"/>
      </div>
      <div className="product">
        <p>Categoria: {product.category} </p>
        <h1> {product.title} </h1>
        <h2>${product.price} </h2>
        <p className="desc"> {product.description} </p>
        <div>
          { cantidad === 0 ? (
            <ItemCount stock={product.stock} initial={quantity} onAdd={onAdd} />
          ) : (
            <Link to='/cart' ><button>ir al carrito</button> </Link>
          )}
        </div>   
      </div>
    </div>

  )
}

export default ItemDetail