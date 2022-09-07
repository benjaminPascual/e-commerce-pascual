import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productsList}) => {

  return (
    <div id='container'> 
        {productsList.map(prod => <Item key={prod.id} item={prod} /> )}
    </div>
  )
}

export default ItemList