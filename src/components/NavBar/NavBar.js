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
                            <span className="d-flex align-items-center">
                                <CartWidget />
                            </span>
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
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default AccountScreen;