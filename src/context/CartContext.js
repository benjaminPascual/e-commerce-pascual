import React, { createContext, useState } from 'react'
import swal from 'sweetalert';

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

    const totalQuantity = () => {
        let acum = 0
        cart.forEach((prod) => {
            acum = acum + prod.quantity 
        })
        return acum;
    }

    const totalPrice = () => {
        let acum = 0
        cart.forEach((prod) => {
            acum = acum + prod.price * prod.quantity 
        })
        return acum;
    }

    const removeItem = (id) => {
       const filteredProducts = cart.filter((prod) => prod.id !== id)
       setCart(filteredProducts);
       swal({
        title: "Producto Eliminado",
        icon: "error",
        button: "ok",
        timer: "1000"
      });
    };

    const clearCart = () =>{
        setCart([]);
        swal({
            title: "Carrito Vacio",
            text: "Su carrito fue vaciado correctamente",
            icon: "warning",
            button: "ok",
            timer: "2000"
          });
    }

    const getProductQuantity = (id) => {
        const item = cart.find((prod)=> prod.id === id)
        return item?.quantity
    }

    const isInCart = (id) => {
       return cart.some((prod) => prod.id === id)
    };

  return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        clearCart,
        removeItem,
        totalQuantity,
        getProductQuantity,
        totalPrice
        }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;