/* eslint-disable react-hooks/exhaustive-deps */
import './Checkout.css';
import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import Firebase from '../../firebase';

const Checkout = () => {
    const cart = useContext(CartContext);
    const [orderId, setOrderId] = useState("loading...");
    const [order, setOrder] = useState({buyer: {}, items: []});

    // Create order
    useEffect(() => {
        setOrder(
            {
                buyer: {
                    name: "Mauricio Aguilar",
                    phone: "0303456",
                    email: "mauricio.aguilar-@gmail.com"
                },
                items: cart.items.map((elem) => {
                    return {
                        id: elem.item.id,
                        title: elem.item.title,
                        price: elem.item.price,
                        quantity: elem.quantity
                    }
                }),
                date: new Date().toDateString(),
                total: cart.getTotalPrice()
            }
        );
    }, []);

    // Send Order to DB
    useEffect(() => {
        if( order.items.length > 0){
            console.log("Adding Order to DB:");
            console.log(order);
            // Send order
            Firebase.add("orders", order).then((result) => {
                setOrderId(result.id);
                cart.clear();
            })
        }
    }, [order])

    return (
        <>
        <div className="row">
            <div className="col-3"></div>
            <div className="col checkout">

                <h3>Checkout successfully completed, thank you for your purchase!</h3>
                <small><b>Order Id:</b> {orderId}</small><br/>
                <small><b>Date:</b> {order.date}</small><br />
                <br />

                <h3>Order detail:</h3>
                {
                    order.items.map((item, index) => {
                        return <tr key={item.id}>
                            <b>{item.quantity} </b>{item.title}<b> ${item.price}</b>
                            <br />
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                            {(item.price * item.quantity > 100)
                                ?<small className="ms-2 free-shipping">free shipping</small>
                                : <small> shipping cost: $10</small>
                            }
                        </tr>
                    })
                }
                <br />
                <h5>Total: ${order.total}</h5>

                <br />

                <h4>Buyer info:</h4>
                <small>{order.buyer.name}</small><br />
                <small>{order.buyer.phone}</small><br />
                <small>{order.buyer.email}</small><br />
                <br />

                <Link to="/">
                    <button className="btn btn-dark">Go back to Catalog</button>
                </Link>

            </div>
            <div className="col-3"></div>
        </div>
        </>
    );
}

export default Checkout;