import React from 'react'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import './Main.css'

const Main = () => {
    const onAdd = ()=>{
        alert("agregado con exito!");
    }
    return (
        <main className="main">
           <ItemListContainer saludo='Bienvenidos a Altamira' />
           <ItemDetailContainer onAdd={onAdd} />
        </main>
    );
};
export default Main;