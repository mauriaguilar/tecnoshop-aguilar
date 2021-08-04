import Button from "../Button/Button"
import CartWidget from "../CartWidget/CartWidget"

const AccountScreen = () => {
    return (
        <div className="row">
            <div className="col">

                <div className="row">
                    <div id="title" className="col d-flex justify-content-center">
                        <span className="d-flex align-items-center">
                            <CartWidget />
                        </span>
                        TecnoShop Aguilar
                    </div>
                </div>

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