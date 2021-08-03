import './ItemCount.css';

const ItemCount = ({ greeting }) => {
    return (
        <>
            <div class="card">
                <img src="http://lorempixel.com/400/200/technics/" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">
                        {/* Stock controls component */}
                        <div className="input-group mb-3">
                            <button className="btn btn-outline-secondary m-0" type="button" id="button-addon1">-</button>
                            <input type="text" className="form-control" placeholder="0" aria-label="amount" aria-describedby="button-addon1" />
                            <button className="btn btn-outline-secondary m-0" type="button" id="button-addon2">+</button>
                        </div>

                        {/* Add to cart button component */}
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-outline-secondary m-0" type="button" id="button-addon2">Agregar al carrito</button>
                            </div>
                        </div>
                    </small>
                </div>
            </div>
        {/* Card Item Component */}

        </>
    );
}

export default ItemCount;



