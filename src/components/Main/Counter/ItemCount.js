import React, {useState} from 'react'
import '../Item/Item.css'

const ItemCount = (props) => {
  const [count, setCount] = useState(0)

  let stock = props.stock

  const sumar = () => {
    count<stock ? setCount(count +1) : alert("la cantidad supera al Stock");
  };
  const restar = () => {
    count>props.initial && setCount(count -1);
  };


  return (
    <div>
      <div id="count">
        <button className='btnCount' onClick={sumar}>+</button>
        <h6>Cantidad: {count}</h6>
        <button className='btnCount' onClick={restar}>-</button>
      </div>
      <button className='btnCountAdd' disabled={count === 0} onClick={props.add} >Agregar al carrito</button>
    </div>
  )
}

export default ItemCount 