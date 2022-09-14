import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (product, quantity) =>{
        if (isInCart(product.id)) {
            totalQuantityItem(product, quantity)
        } else {
            setCart([...cart, {...product, quantity}]);
        }
    };

    const totalQuantityItem = (product, quantity) => {
        const updateProducts = cart.map((prod) => {

            if (prod.id === product.id) {

                const productUpdate = {...prod, quantity};
                return productUpdate

            } else {

                return prod
            }
        })

        setCart(updateProducts);
    };

    const removeItem = (id) => {
       const filteredProducts = cart.filter((prod) => prod.id !== id)
       setCart(filteredProducts);
    };

    const clearCart = () =>{
        setCart([]);
    }

    const isInCart = (id) => {
       return cart.some((prod) => prod.id === id)
    };

  return (
    <CartContext.Provider value={{cart, addToCart, clearCart, removeItem}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;