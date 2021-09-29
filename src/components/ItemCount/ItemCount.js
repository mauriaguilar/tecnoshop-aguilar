import React, {useState, useEffect} from 'react';
import './ItemCount.css';


const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial);

    useEffect(() => {
            setCount(initial);
    }, [initial])

    const delItem = () => {
        if (count !== 0)
            setCount(count - 1);
    }

    const addItem = () => {
        if (count < stock)
            setCount(count + 1);
    }

    const addToCart = () => {
        if (stock > 0)
            onAdd(count);
    }

    return (
        <>
            <div className="card-footer">
                <small className="text-muted">

                    {/* Buttons to change the stock */}
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary m-0 noselect" type="button"
                         disabled={count===0} onClick={delItem}>
                            -
                        </button>

                        <input type="text" className="form-control text-center noselect"
                          placeholder={count} aria-label="amount"/>

                        <button className="btn btn-outline-secondary m-0 noselect" type="button"
                          disabled={count===stock} onClick={addItem}>
                            +
                        </button>
                    </div>

                    {/* Button Add-to-cart */}
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                                <button
                                    className="btn btn-dark m-0"
                                    disabled={count===0}
                                    type="button"
                                    id="button-addon2"
                                    onClick={addToCart}>
                                        Add to cart
                                </button>
                        </div>
                    </div>

                </small>
            </div>
        </>
    );
}

export default ItemCount;
