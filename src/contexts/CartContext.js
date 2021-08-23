import React, { useState } from 'react';


export const CartContext = React.createContext();

const defaultValue = {};



export default function CartProvider({ children }) {
    const [cart, setCart] = useState(defaultValue);


    const addItem = (item_id, quantity) => {
        console.log("Adding " + quantity + " items of " + item_id + ".");
        cart[item_id] = quantity;
        setCart({...cart});
        console.log("---cart-----");
        console.log(cart);
        console.log("---/cart-----");

        // Testing functions
        // removeItem(item_id);
        // clear();
        // isInCart(item_id);
        // isInCart(0);
    }

    const removeItem = (item_id) => {
        console.log("Removing item id.");
        if (isInCart(item_id)){
            delete cart[item_id];
            setCart({...cart});
            console.log("Item " + item_id + " was removed.");
        } else {
            console.log("It is not possible to remove the item because it doesn't exist.")
        }
    }

    const clear = () => {
        console.log("Removing all items.");
        setCart({});
    }

    const isInCart = (item_id) => {
        console.log("Is in cart: " + ((item_id in cart) ? true : false));
        return (item_id in cart) ? true : false;
    }

    return (
        <CartContext.Provider value={{
            cart: cart,
            addItem: addItem,
            removeItem: removeItem,
            clear: clear,
            isInCart: isInCart
        }}>
            {children}
        </CartContext.Provider>
    )

}
