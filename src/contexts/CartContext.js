import React, { useState } from 'react';


export const CartContext = React.createContext();

const defaultValue = {};



export default function CartProvider({ children }) {
    const [cart, setCart] = useState(defaultValue);


    const addItem = (item_id, quantity) => {
        console.log("Adding " + quantity + " items of " + item_id + ".");
        console.log({...cart})
        cart[item_id] = quantity;
        setCart({...cart});
        console.log("---cart-----");
        console.log(cart);
        console.log("---/cart-----");
    }

    // const removeItem = (item_id) => {
    //     console.log("Removing item id.");
    // }

    // const clear = () => {
    //     console.log("Removing all items.");
    // }

    // const isInCart = (item_id) => {
    //     console.log("Is in cart.");
    // }

    return (
        <CartContext.Provider value={{
            cart: cart,
            addItem: addItem
        }}>
            {children}
        </CartContext.Provider>
    )
    // ,
    // removeItem: removeItem,
    // clear: clear,
    // isInCart: isInCart

}
