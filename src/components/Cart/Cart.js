import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';


const Cart = () => {
    const cart = useContext(CartContext);
    const [buyerData, setBuyerData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    return (
        <div className="text-center">

            {(cart?.items.length === 0)
            ?
                // Empty Cart Message
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col text-center">
                        <h3>Your cart is empty</h3>
                        <h4>Thousands of products are waiting for you!</h4>
                        <Link to="/"><button type="button" className="btn btn-primary">Go to catalog</button></Link>
                    </div>
                    <div className="col-3"></div>
                </div>
            :
                <>
                {/* Title */}
                <div className="row">
                    <h2 className="col">Purchase details:</h2>
                </div>

                {/* Table of Items */}
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 bg-white bbg justify-content-center">

                        <table className="table align-middle">
                            {/* Titles of the table */}
                            <thead>
                                <tr>
                                    <th scope="col" colSpan={2}>Product</th>
                                    <th scope="col">Count</th>
                                    <th scope="col">Price</th>
                                    <th scope="col" className="col-1"></th>
                                </tr>
                            </thead>
                            {/* Item list */}
                            <tbody>
                                {
                                 cart.items.map((elem) => {
                                    return <tr key={elem.item.id}>
                                        <td><img src={elem.item.pictureUrl} alt="item" className="picture mb-3"/></td>
                                        <td className="float-left">
                                            <b>{elem.item.title}</b>
                                            <br />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                            </svg>
                                            {(elem.item.price * elem.quantity > 100)
                                                ? <small className="ms-2 free-shipping">free shipping</small>
                                                : <small>shipping cost: $10*</small>
                                            }
                                        </td>
                                        <td>{elem.quantity}</td>
                                        <td>${elem.item.price}</td>
                                        <td className="text-center cursor-pointer">
                                            <svg onClick={() => cart.removeItem(elem.item.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                        </td>
                                    </tr>
                                 })
                                }
                                {/* Total Price */}
                                <tr>
                                    <th scope="row">Total</th>
                                    <td></td>
                                    <td></td>
                                    <td><b>${cart.getTotalPrice()}</b></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <small>* free shipping on purchases over $100.</small>
                    </div>

                    <div className="col-3"></div>
                </div>
                <br/>
                {/* Buyer data */}
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col bg-white bbg buyer-data">
                        <b>shipping data:</b><br/>
                        Name: <input type="text" onChange={(e) => setBuyerData({...buyerData, name: e.target.value})} value={buyerData.name}/><br/>
                        Email: <input type="text" onChange={(e) => setBuyerData({...buyerData, email: e.target.value})} value={buyerData.email}/><br/>
                        Phone number: <input type="number" onChange={(e) => setBuyerData({...buyerData, phone: e.target.value})} value={buyerData.phone}/><br/>
                        Address: <input type="text" onChange={(e) => setBuyerData({...buyerData, address: e.target.value})} value={buyerData.address}/><br/>
                        <br/>
                    </div>
                    <div className="col-3"></div>
                </div>

                {/* Buy button */}
                <div className="row">
                    <div className="col-3"></div>
                    <Link className="col"
                        to={{
                            pathname: (!!buyerData.name && !!buyerData.email && !!buyerData.phone && !!buyerData.address) ? `/checkout` : "#",
                            state: {buyerData}
                        }}
                    >
                        <button className="btn btn-dark ps-5 pe-5" disabled={!(!!buyerData.name && !!buyerData.email && !!buyerData.phone && !!buyerData.address)}>Buy!</button>
                    </Link>
                    <div className="col-3"></div>
                </div>
                </>
            }

        </div>
    )
}

export default Cart;