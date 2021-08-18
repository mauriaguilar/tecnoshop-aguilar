import Button from "../Button/Button"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom';

const AccountScreen = () => {
    return (
        <div className="row">
            <div className="col">

                <Link to="/">
                <div className="row">
                    <div id="title" className="col d-flex justify-content-center">
                            <span className="d-flex align-items-center">
                                <CartWidget />
                            </span>
                            <span className="appname">
                                TecnoShop Aguilar
                            </span>
                    </div>
                </div>
                </Link>

                <div className="row">
                    <div id="subtitle" className="col d-flex justify-content-center">Technology items for your life.</div>
                </div>

                <div className="row">
                    <ul className="col d-flex justify-content-center nav nav-pills mb-3 navbar-dark bg-dark" id="pills-tab" role="tablist">
                        <Button text="Smartphones"/>
                        <Button text="Smartwatches"/>
                        <Button text="Batteries"/>
                        <Button text="Speakers"/>
                        <Button text="Accessories"/>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default AccountScreen;