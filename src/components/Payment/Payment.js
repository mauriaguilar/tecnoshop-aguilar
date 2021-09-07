import './Payment.css';
import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import Firebase from '../../firebase';

const Payment = () => {
    const [orderId, setOrderId] = useState("loading...");
    const saleDate = new Date().toDateString();
    const cart = useContext(CartContext);
    const [orderList, setOrderList] = useState([]);
    const [totalPayment, setTotalPayment] = useState(0);
    const [seller, ] = useState({
        name: "Mauricio Aguilar",
        phone: "0303456",
        email: "mauricio.aguilar-@gmail.com"
    });

    useEffect(() => {
        // Save order list
        if (cart.items.length !== 0) {
            setOrderList([...cart.items]);
        }
    }, [cart.items])

    useEffect(() => {
        // Calc total payment
        let total = orderList.reduce(((n, elem) => {
            if (elem.item.price*elem.quantity > 100)
                return n+elem.item.price*elem.quantity;
            else
                return n+elem.item.price*elem.quantity + 10;
        }), 0);
        setTotalPayment(Math.round(total * 100) / 100);
    }, [orderList])

    // send order
    useEffect(() => {
        if (totalPayment !== 0){
            console.log("Adding order:");
            Firebase.add("orders", {
                buyer: {
                    name: seller.name,
                    phone: seller.phone,
                    email: seller.email
                },
                items: orderList.map((elem) => {
                    return {
                        id: elem.item.id,
                        title: elem.item.title,
                        price: elem.item.price,
                        quantity: elem.quantity
                    }
                }),
                date: saleDate,
                total: totalPayment
            }).then((result) => {
                setOrderId(result.id);
                cart.clear();
            })
        }
    }, [totalPayment])

    return (
        <>
        <div className="row">
            <div className="col-3"></div>
            <div className="col payment">

                <h3>Payment successfully completed, thank you for your purchase!</h3>
                <small><b>Order Id:</b> {orderId}</small><br/>
                <small><b>Date:</b> {saleDate}</small><br />
                <br />

                <h3>Order detail:</h3>
                {
                    orderList.map((elem, index) => {
                        return <tr key={elem.item.id}>
                            <b>{elem.quantity} </b>{elem.item.title}<b> ${elem.item.price}</b>
                            <br />
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                            {(elem.item.price * elem.quantity > 100)
                                ?<small className="ms-2 free-shipping">free shipping</small>
                                : <small> shipping cost: $10</small>
                            }
                        </tr>
                    })
                }
                <br />
                <h5>Total: ${totalPayment}</h5>

                <br />

                <h4>Seller info:</h4>
                <small>{seller.name}</small><br />
                <small>{seller.phone}</small><br />
                <small>{seller.email}</small><br />
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

export default Payment;