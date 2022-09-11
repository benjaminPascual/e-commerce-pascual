import React, { useState } from 'react'
import ItemCount from '../../Counter/ItemCount';
import './ItemDetail.css'
import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {
  const [cantidad, setCantidad] = useState(0);
  const onAdd = (count)=>{ setCantidad(count) };

  return (
    <div className="container">
      <div className="images">
        <img src={product.img} />
      </div>
      <div className="product">
        <p>Categoria: {product.category} </p>
        <h1> {product.title} </h1>
        <h2>${product.price} </h2>
        <p className="desc"> {product.description} </p>
        <div>
          { cantidad === 0 ? (
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
          ) : (
            <Link to='/cart' ><button>ir al carrito</button> </Link>
          )}
        </div>   
      </div>
    </div>

  )
}

export default ItemDetail