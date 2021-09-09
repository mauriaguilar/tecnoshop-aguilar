import React, { useEffect, useState } from 'react';


export const CartContext = React.createContext();

const defaultValue = [];


export default function CartProvider({ children }) {
    const [items, setItems] = useState(defaultValue);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        setTotalQuantity( items.reduce(((n, item) => n+item.quantity), 0) );
        console.log(items.map(((item) => item.quantity)))
    }, [items]);

    const addItem = (item, quantity) => {
        console.log("Adding " + quantity + " items of " + item.id + ".");
        if (item.id !== undefined && isInCart(item.id)) {
            let curr_item = items.find(elem => elem.item.id === item.id);
            curr_item.quantity += quantity;
            setTotalQuantity( items.reduce(((n, item) => n+item.quantity), 0) );
        } else {
            setItems([...items, { item, quantity }]);
        }
    }

    const removeItem = (item_id) => {
        let new_items = items.filter(function (element) {
            return element.item.id !== item_id;
        });
        console.log("Item " + item_id + " was removed.");
        setItems(new_items);
    }

    const clear = () => {
        setItems([]);
        console.log("All items removed.");
    }

    const isInCart = (item_id) => {
        let isInCart = (items.find(elem => elem.item.id === item_id) !== undefined) ? true : false;
        console.log("Is in cart: " + isInCart + ".");
        return isInCart;
    }
    const getTotalPrice = () => {
        return Math.round(
            items.reduce(((n, elem) => {
                if (elem.item.price*elem.quantity > 100)
                    return n+elem.item.price*elem.quantity;
                else
                    return n+elem.item.price*elem.quantity + 10;
            }), 0)
            * 100) / 100;
    }


    return (
        <CartContext.Provider value={{ items, addItem, removeItem, clear, isInCart, getTotalPrice, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )

}
