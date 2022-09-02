import React from 'react'
import ItemCount from '../Counter/ItemCount.js'
import './Item.css'

const Item = (props) => {

    let stock = props.stock
    
  return (
    <div>
        <div id="card">
            <img src={props.img} alt=""></img>
            <div id="content">
                <div>
                    <h3>{props.title}</h3>
                    <p> {props.description} </p>
                </div>
                <div>
                    <h6>Categoria: {props.category} </h6>
                    <h6>Stock: {stock}</h6>
                </div>
                <div id="price">
                    <button> {props.price} </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item