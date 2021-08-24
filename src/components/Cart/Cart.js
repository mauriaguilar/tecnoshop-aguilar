import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext'


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

            <div className="col-5 bg-white">

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product</th>
                            <th scope="col">Count</th>
                            <th scope="col">Price</th>
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
                            </tr>
                        })
                    }
                        <tr>
                            <th scope="row">Total</th>
                            <td></td>
                            <td></td>
                            <td><b>${totalPrice}</b></td>
                            {/* <td>.</td> colSpan={3}>
                            */}
                        </tr>
                    </tbody>
                </table>

            </div>

            {/* <h5>Cart:</h5> <pre>{JSON.stringify(cart?.items, null, 4)}</pre> */}
        </>
    )
}

export default Cart;