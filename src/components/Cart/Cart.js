import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';


const Cart = () => {
    const cart = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        console.log(cart);
        let subtotal = 0;
        for (let i=0; i<cart.items.length; i++) {
            subtotal += cart.items[i].item.price * cart.items[i].quantity;
        }
        setTotalPrice(Math.round(subtotal * 100) / 100);
    }, [cart])

    return (
        <>
            <h2>Purchase details:</h2>

            {!cart?.items.length && <div>"NO HAY ITEMS"<Link to="/">Ir a comprar algo</Link></div>}

            <div className="col-5 bg-white">

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product</th>
                            <th scope="col">Count</th>
                            <th scope="col">Price</th>
                            <th scope="col" className="col-1">Control</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        cart.items.map((elem, index) => {
                            return <tr key={elem.item.id}>
                                <th scope="row">{index+1}</th>
                                <td>{elem.item.title}</td>
                                <td>{elem.quantity}</td>
                                <td>{elem.item.price}</td>
                                <td className="text-center pointer">
                                    <svg onClick={() => cart.removeItem(elem.item.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </td>
                            </tr>
                        })
                    }
                        <tr>
                            <th scope="row">Total</th>
                            <td></td>
                            <td></td>
                            <td><b>${totalPrice}</b></td>
                            <td></td>
                            {/* <td>.</td> colSpan={3}>
                            */}
                        </tr>
                    </tbody>
                </table>

                Arreglar tema de que al hacer click en un Loading te redirige
                Agregar un spin
            </div>

            {/* <h5>Cart:</h5> <pre>{JSON.stringify(cart?.items, null, 4)}</pre> */}
        </>
    )
}

export default Cart;