import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ( {item} ) => {

  return (
    <div>
        <div id="card">
            <img src={item.img} alt=""></img>
            <div id="content">
                <div>
                    <h3>{item.title}</h3>
                    <p> {item.description} </p>
                </div>
                <div>
                    <h6>Categoria: {item.category} </h6>
                    <h6>Stock: {item.stock}</h6>
                </div>
                <div id="price">
                    <Link to={`/item/${item.id}`}>
                        <button>${item.price} </button>
                        <button>Agregar</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item