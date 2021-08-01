import './title.css';
import CartWidget from "./CartWidget"

const Title = () => {
    return (
        <>
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
        </>
    );
}

export default Title;