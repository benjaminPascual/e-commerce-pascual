import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productsList}) => {

  return (
    <div id='container'> 
        {productsList.map(prod => <Item key={prod.id} title={prod.title} description={prod.description} price={prod.price} stock={prod.stock} category={prod.category} img={prod.img} /> )}
    </div>
  )
}

export default ItemList