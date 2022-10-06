import React, {useState} from 'react'
import { useEffect } from 'react'
import './Counter.css'
import swal from 'sweetalert'

const ItemCount = ({stock, initial = 1, onAdd}) => {
  const [count, setCount] = useState(initial)

  useEffect(()=>{ setCount(initial)}, [initial])

  const sumar = () => {
    count<stock ? setCount(count +1) : swal({
      title: "uupps!",
      text: "La cantidad deseada supera el stock maximo.",
      icon: "warning",
      button: "ok",
    });
  };
  const restar = () => {
    count>1 && setCount(count -1);
  };


  return (
    <div>
      <div id="count">
        <button className='btnCount' onClick={sumar}>+</button>
        <h6>Cantidad: {count}</h6>
        <button className='btnCount' onClick={restar}>-</button>
      </div>
      <div className='containterBtnAdd'>
        <button className='btnCountAdd' disabled={count === 0} onClick={() => onAdd(count)} >Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount 