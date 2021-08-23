import { useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/CartContext'


const Cart = () => {
    const cartContext = useContext(CartContext);

    useEffect(() => {
        console.log(cartContext);
    }, [cartContext])

    return (
        <>
            <h2>Purchase details:</h2>
            <h4>{JSON.stringify(cartContext?.cart)}</h4>
        </>
    )
}

export default Cart;