import React from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom'
import CartProvider, { CartContext } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer /> 
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;