import React, {useContext, useState, useEffect} from 'react';
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

const ItemDetail = ({ item }) => {

    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(item.initial);
    }, [item]);

    const [isVisible, setIsVisible] = useState(false);
    const onAdd = (quantityToAdd) => {
        console.log("Adding item to cart...");
        setCount(quantityToAdd);
        item.initial = quantityToAdd;
        setIsVisible(true);
    }
    const hideTotal = () => {
        setIsVisible(false);
    }
    const cart = useContext(CartContext);
    const finishPurchase = () => {
        console.log("Finish purchase");
        cart.addItem(item, count);
    }

    return (
        <>
            <div className="row me-3 shadow bg-white ms-1 mb-1">

                <div className="col-8 ps-0">
                    <img src={item.pictureUrl} className="card-img-top h-100" alt="..." />
                </div>

                <div className="col-4">
                    <div className="card-body">

                        <h5 className="card-title">{item.title !== "..." ? item.title : "Loading..."}</h5>
                        <span className="card-text fs-5">
                        {item.description
                            ?
                                item.description
                            :
                                <>
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <br/><br/><br/>
                                </>
                        }
                        </span>

                        <h3>$ {item.price}</h3>
                        <i>{(item.id !== 0) && !item.stock && <h5>Sin stock</h5>}</i>

                        {!isVisible
                        ?
                            <ItemCount id={item?.id} title={item?.title} stock={item.stock} initial={count} onAdd={onAdd}/>
                        :
                            <div>{count} units.<br />
                                <button className="btn btn-outline-secondary m-0 me-3" type="button" onClick={hideTotal}>
                                    Cancel
                                </button>
                                <Link to="/cart">
                                    <button className="btn btn-dark m-0" type="button" onClick={finishPurchase}>
                                        Finish my purchase
                                    </button>
                                </Link>
                            </div>
                        }
                    </div>
                </div>


            </div>
        </>
    );
}

export default ItemDetail;