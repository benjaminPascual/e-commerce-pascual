import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Form from '../Form/Form';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import './Main.css'

const Main = () => {
    
    return (
        <main className="main">
            <Routes>
                <Route 
                    path='/' 
                    element={<ItemListContainer saludo='Bienvenidos a Altamira' />}
                /> 
                <Route 
                    path='/category/:categoryId' 
                    element={<ItemListContainer saludo='Bienvenidos a Altamira' />}
                /> 
                <Route 
                    path='/item/:idProd' 
                    element={<ItemDetailContainer/>}
                />
                <Route 
                    path='/cart' 
                    element={<Cart />}
                />
                <Route 
                    path='/form' 
                    element={<Form />}
                />
            </Routes>
        </main>
    );
};
export default Main;