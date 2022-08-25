import React, {useState} from 'react'

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
      <button onClick={sumar}>+</button>
      <p>Cantidad: {count} </p>
      <button onClick={restar}>-</button>
      <button disabled={count === 0} onClick={props.add} >Agregar al carrito</button>
    </div>
  )
}

export default ItemCount 