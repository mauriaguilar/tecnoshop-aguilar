import React, {useEffect, useState} from 'react';
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {

    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const onAdd = (item) => {
        console.log("Adding item to cart...");
        setCount(item.count);
        item.initial = count;
        setIsVisible(true);
    }
    const hideTotal = () => {
        setIsVisible(false);
    }
    const finishPurchase = () => {
        console.log("Terminar compra");
    }

    return (
        <>
            <div className="row me-3 shadow bg-white ms-1 mb-1">
            
                <div className="col-6 ps-0">
                    <img src={item.pictureUrl} className="card-img-top" alt="..." />
                </div>

                <div className="col-4">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text fs-5">{item.description}</p>
                        <h3>$ {item.price}</h3>
                        {!isVisible &&
                            <ItemCount id={item?.id} title={item?.title} stock={item.stock} initial={count} onAdd={onAdd}/>
                        }
                        {isVisible &&
                            <div>{count} units.<br /> 
                                <button className="btn btn-outline-secondary m-0 me-3" type="button" onClick={hideTotal}>
                                    Cancel
                                </button>
                                <Link to="/cart">
                                    <button className="btn btn-outline-secondary m-0" type="button" onClick={finishPurchase}>
                                        Finish Purchase
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