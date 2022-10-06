import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import { db } from '../../../firebaseConfig';
import { getDoc, doc, collection } from 'firebase/firestore';
import { ScaleLoader } from 'react-spinners';

// eslint-disable-next-line
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
          setTimeout(()=>{setLoading(false);}, 1000)
        })
        .catch((err)=>{console.error(err);})
    }, [idProd])

  return (
    <div>
      {loading ? 
        <div className='scaleLoader'><ScaleLoader color={"black"} size={100} /></div>
        :
        <ItemDetail product={product} />
      }
    </div>
  )
}

export default ItemDetailContainer