import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    return (
        <>
            <div className="card">
                <img src="http://lorempixel.com/400/200/technics/" className="card-img-top" alt="..." />

                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text fs-5">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>

                <div className="card-footer">
                    <small className="text-muted">

                        {/* Stock controls component */}
                        <div className="input-group mb-3">
                            <button className="btn btn-outline-secondary m-0" type="button" id="button-addon1">-</button>
                            <input type="text" className="form-control text-center" placeholder={initial} aria-label="amount" aria-describedby="button-addon1" />
                            <button className="btn btn-outline-secondary m-0" type="button" id="button-addon2">+</button>
                        </div>

                        {/* Add-to-cart button component */}
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                    <button className="btn btn-outline-secondary m-0 " type="button" id="button-addon2">Agregar al carrito</button>
                            </div>
                        </div>

                    </small>
                </div>

            </div>
        </>
    );
}

export default ItemCount;



