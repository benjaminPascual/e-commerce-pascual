import React, { useEffect, useState } from 'react'
import { products } from '../../Mock/products'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = (props) => {

  const [productsList, setProductList] = useState([])

  const getProducts = ()=> new Promise((res, rej)=> {
    setTimeout(()=> res(products), 2000);
  })

  useEffect(() => {
    getProducts()
    .then(products => setProductList(products))
    .catch(error => console.error(error))
  }, [])

  return (
    <div>
        <h1 className="titulo"> {props.saludo} </h1>
        <ItemList productsList={productsList} />
    </div>
  )
}

export default ItemListContainer