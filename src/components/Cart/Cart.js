import { useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/CartContext'


const Cart = () => {
    const cart = useContext(CartContext);

    useEffect(() => {
        console.log(cart);
    }, [cart])

    return (
        <>
            <h2>Purchase details:</h2>
            <h5>Cart:</h5>
            <pre>{JSON.stringify(cart?.items, null, 4)}</pre>
        </>
    )
}

export default Cart;