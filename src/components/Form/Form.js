import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import swal from 'sweetalert'
import './Form.css'

const Form = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const [nombre, setNombre] = useState('')
    const [emailI, setEmailI] = useState('')
    const [emailII, setEmailII] = useState('')
    const [direcc, setDirecc] = useState('')
    const [idCompra, setIdCompra] = useState('')

    const handleSubmit = ()=> {
        const order = {
            buyer:{nombre: nombre, email: emailI, direccion: direcc},
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

    const confirmationBuy = (event)=> {
        event.preventDefault();
        const condition = (nombre !== '' && direcc !== '' && emailI === emailII);
        if (condition) {
            handleSubmit();
            swal({
                title: "confirmado",
                text: "Gracias por tu compra",
                icon: "success",
                button: "ok",
                timer: "2000"
              });
        } else {
            swal({
            title: "uupps!",
            text: "alguno de los campos se encuentra vacio o el Email es incorrecto",
            icon: "warning",
            button: "ok",
          });
        }
    }

    const changeName = (e)=>{
        setNombre(e.target.value)
    };
    const changeEmailI = (e)=>{
        setEmailI(e.target.value)
    };
    const changeEmailII = (e)=>{
        setEmailII(e.target.value)
    };
    const changeDirecc = (e)=>{
        setDirecc(e.target.value)
    };

    if (idCompra) {
        return <h1 className='idCompra'>Tu id de compra es: {idCompra} </h1>
    }

  return (
    <div className='form'>
        <form action="" onSubmit={confirmationBuy}>
            <input type="text" placeholder='Nombre' value={nombre} onChange={changeName} />
            <input type="text" placeholder='Direccion' value={direcc} onChange={changeDirecc} />
            <input type="text" placeholder='E-mail' value={emailI} onChange={changeEmailI} />
            <input type="text" placeholder='Confirmacion de E-mail' value={emailII} onChange={changeEmailII} />
            <button>Confirmar Compra</button>
        </form>
    </div>
  )
}

export default Form