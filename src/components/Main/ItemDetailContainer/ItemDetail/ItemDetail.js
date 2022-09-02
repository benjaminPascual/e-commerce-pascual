import React from 'react'
import ItemCount from '../../Counter/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({product, onAdd}) => {
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
        <div className="buttons">
          <ItemCount stock={product.stock} initial={0} onAdd={onAdd} />
        </div>
      </div>
    </div>

  )
}

export default ItemDetail