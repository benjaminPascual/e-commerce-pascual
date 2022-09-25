import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

const Form = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [direcc, setDirecc] = useState('')
    const [idCompra, setIdCompra] = useState('')

    const handleSubmit = (event)=> {
        event.preventDefault();
        const order = {
            buyer:{nombre: nombre, email: email, direccion: direcc},
            items: cart,
            total: totalPrice(),
            date: serverTimestamp()
        };
        
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
        .then((res)=>{
            setIdCompra(res.id);
            clearCart();
        });
    };

    const changeName = (e)=>{
        setNombre(e.target.value)
    };
    const changeEmail = (e)=>{
        setEmail(e.target.value)
    };
    const changeDirecc = (e)=>{
        setDirecc(e.target.value)
    };

    if (idCompra) {
       return <h1>gracias por tu compra, tu id es: {idCompra} </h1>
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Nombre' value={nombre} onChange={changeName} />
            <input type="text" placeholder='E-mail' value={email} onChange={changeEmail} />
            <input type="text" placeholder='Direccion' value={direcc} onChange={changeDirecc} />
            <button>Confirmar Compra</button>
        </form>
    </div>
  )
}

export default Form