import React from 'react'
import ItemCount from '../Counter/ItemCount'


const ItemListContainer = (props) => {
  const onAdd = ()=>{
    alert("agregado con exito!")
  }

  return (
    <div>
        <h1 className="titulo"> {props.saludo} </h1>
        <ItemCount stock={10} initial={0} add={onAdd} />
    </div>
  )
}

export default ItemListContainer