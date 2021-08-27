import './CartWidget.css';
import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const [budgeNum, setBudgeNum] = useState(0);
    const cart = useContext(CartContext);

    useEffect(() => {
        console.log(cart);
        let budge_num = 0;
        for (const index in cart.items) {
            budge_num += cart.items[index].quantity;
        }
        setBudgeNum(budge_num);
    }, [cart])

    return (
        <>
            {(budgeNum!==0) &&
            <Link to="/cart">
                <div className="btn position-absolute">
                    <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-basket position-relative" viewBox="0 0 16 16">
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    <span className="position-absolute top-50 start-50 translate-middle badge rounded-pill bg-danger">
                        {budgeNum}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
            </Link>
            }
        </>
    );
}

export default CartWidget;