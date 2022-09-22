import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import { db } from '../../../firebaseConfig';
import { getDoc, doc, collection } from 'firebase/firestore';

const ItemDetailContainer = ({}) => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})
    const {idProd} = useParams(); 

    useEffect(() => {
        const itemCollection = collection(db, "productos")
        const prod = doc(itemCollection, idProd)
        getDoc(prod)
        .then((res)=>{
          setProduct(
            {id: res.id,
            ...res.data()
            });
          setLoading(false);
        })
        .catch((err)=>{console.error(err);})
    }, [idProd])

  return (
    <div>
      {loading ? 
        <h2>Cargando..</h2>
        :
        <ItemDetail product={product} />
      }
    </div>
  )
}

export default ItemDetailContainer