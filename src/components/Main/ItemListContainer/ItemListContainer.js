import React, { useEffect, useState } from 'react'
import { products } from '../../Mock/products'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'


const ItemListContainer = (props) => {

  const [productsList, setProductList] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams();

  const prodFiltrados = products.filter((prod)=> prod.category === categoryId)

  const getProducts = ()=> new Promise((res, rej)=> {
    setTimeout(()=> res(categoryId ? prodFiltrados : products), 200);
  })

  useEffect(() => {
      getProducts()
    .then(products => {
      setProductList(products)
      setLoading(false)
    })
    .catch(error => console.error(error))
  }, [categoryId])

  return (
    <div>
        {loading ? 
        <h2>Cargando..</h2>
        :
        <>
          <h1 className="titulo"> {props.saludo} </h1>
          <ItemList productsList={productsList} />
        </>
        }
    </div>
  )
}

export default ItemListContainer