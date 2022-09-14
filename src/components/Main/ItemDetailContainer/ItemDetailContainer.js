import React, {useEffect, useState} from 'react'
import { products } from '../../Mock/products';
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({}) => {

    const [product, setProduct] = useState({})
    const {idProd} = useParams(); 

    useEffect(() => {
        const getProduct = ()=> new Promise((res, rej)=> {
            const unicoProd = products.find((prod)=> prod.id === idProd)
            setTimeout(()=> res(unicoProd), 200);
        })

        getProduct()
        .then(res => setProduct(res))
        .catch(error => console.error(error))
    }, [])

  return (
    <div>
        <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer