import React from 'react'
import { Routes, Route } from 'react-router-dom';
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
            </Routes>
        </main>
    );
};
export default Main;