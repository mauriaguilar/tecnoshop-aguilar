import React, {useState, useEffect} from 'react';
import './ItemCount.css';


const ItemCount = ({ stock, initial, onAdd, id, title }) => {

    const [count, setCount] = useState(initial);

    useEffect(() => {
            setCount(initial);
    }, [initial])

    const delItem = () => {
        console.log("Deleting item...");
        if (count !== 0)
            setCount(count - 1);
        else
            console.log("It is not possible to delete an item. Count is 0.");
    }

    const addItem = () => {
        console.log("Adding item...");
        if (count < stock)
            setCount(count + 1);
        else
            console.log("It is not possible to add a new item. Stock is " + stock + ".");
    }

    const addToCart = () => {
        if (stock > 0)
            onAdd(count);
        else
            console.log("It is not possible to add an item to cart, because stock is 0.");
    }

    return (
        <>
            <div className="card-footer">
                <small className="text-muted">

                    {/* Stock controls */}
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

                    {/* Add-to-cart button */}
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                                <button
                                    className="btn btn-outline-secondary m-0"
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
