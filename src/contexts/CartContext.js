import React, { useState } from 'react';


export const CartContext = React.createContext();

const defaultValue = [];



export default function CartProvider({ children }) {
    const [items, setItems] = useState(defaultValue);


    const addItem = (item, quantity) => {
        console.log("Adding " + quantity + " items of " + item.id + ".");
        if (isInCart(item.id)) {
            let new_items = removeItem(item.id);
            setItems([...new_items, {item, quantity}]);
        } else {
            setItems([...items, {item, quantity}]);
        }

        // Testing functions
        // removeItem(item_id);
        // clear();
        // isInCart(item_id);
        // isInCart(0);
    }

    const removeItem = (item_id) => {
        let new_items = items.filter(function(element){
            return element.item.id !== item_id;
        });
        console.log("Item " + item_id + " was removed.");
        return new_items;
    }

    const clear = () => {
        setItems({});
        console.log("All items removed.");
    }

    const isInCart = (item_id) => {
        let isInCart = (items.find(elem => elem.item.id === item_id) !== undefined) ? true : false;
        console.log("Is in cart: " + isInCart + ".");
        return isInCart;
    }

    return (
        <CartContext.Provider value={{items, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )

}
