import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'

const ItemListContainer = (props) => {

  const [productsList, setProductList] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams();

  

  useEffect(() => {

    const itemCollection = categoryId 
    ? query(collection(db, "productos" ),where("category", "==" , categoryId))
    : collection(db, "productos" );
    
    getDocs(itemCollection)
    .then((res)=>{
      const products = res.docs.map((prod)=> {
        return {
          id: prod.id,
          ...prod.data()
        }
      });
      setProductList(products);
      setLoading(false);
    })
    .catch((err)=>{console.error(err)})
  }, [categoryId]);

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
