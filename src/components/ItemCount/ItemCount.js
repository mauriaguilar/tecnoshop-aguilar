import './ItemCount.css';
import React, {useState} from 'react';



const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial);

    const name = "speaker";

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
        console.log("Adding item to cart...");
        if (stock > 0)
            onAdd({"name": name, "count": count});
        else
            console.log("It is not possible to add an item to cart, because stock is 0.");
    }

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
                            <button className="btn btn-outline-secondary m-0" type="button" id="button-addon1" onClick={delItem}>-</button>
                            <input type="text" className="form-control text-center" placeholder={count} aria-label="amount" aria-describedby="button-addon1" />
                            <button className="btn btn-outline-secondary m-0" type="button" id="button-addon2" onClick={addItem}>+</button>
                        </div>

                        {/* Add-to-cart button component */}
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                    <button
                                        className="btn btn-outline-secondary m-0"
                                        type="button"
                                        id="button-addon2"
                                        onClick={addToCart}>
                                            Agregar al carrito
                                    </button>
                            </div>
                        </div>

                    </small>
                </div>

            </div>
        </>
    );
}

export default ItemCount;



