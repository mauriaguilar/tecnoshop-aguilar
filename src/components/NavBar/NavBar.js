import Button from "../Button/Button"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom';
import './NavBar.css';

const AccountScreen = () => {
    const categories = [
        "Smartphones",
        "Smartwatches",
        "Batteries",
        "Speakers",
        "Accessories",
    ]

    return (
        <div className="row">
            <div className="col">

                <Link to="/" className="row title-link">
                    <div id="title" className="col d-flex justify-content-center">
                            <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="60" height="60" className="bi bi-basket m-2 mt-3" viewBox="0 0 16 16">
                                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                            <span>
                                TecnoShop Aguilar
                            </span>
                    </div>
                </Link>

                <div className="row">
                    <div id="subtitle" className="col d-flex justify-content-center">Technology items for your life.</div>
                </div>

                <div className="row">
                    <ul className="col d-flex justify-content-center nav nav-pills mb-3 navbar-dark bg-dark" id="pills-tab" role="tablist">
                        {
                            categories.map(cat => {
                                return <Button key={cat} text={cat}/>
                            })
                        }
                        <span className="position-relative float-rigth ms-3">
                            <CartWidget />
                        </span>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default AccountScreen;