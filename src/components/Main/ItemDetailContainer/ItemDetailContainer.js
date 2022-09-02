import React, {useEffect, useState} from 'react'
import { products } from '../../Mock/products';
import ItemDetail from './ItemDetail/ItemDetail';

const ItemDetailContainer = ({onAdd}) => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        const getProduct = ()=> new Promise((res, rej)=> {
            const unicoProd = products.find((prod)=> prod.id === 1)
            setTimeout(()=> res(unicoProd), 2000);
        })

        getProduct()
        .then(res => setProduct(res))
        .catch(error => console.error(error))
    }, [])

  return (
    <div>
        <ItemDetail product={product} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetailContainer