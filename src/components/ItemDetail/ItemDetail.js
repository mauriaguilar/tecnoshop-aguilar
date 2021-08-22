import React, {useEffect, useState} from 'react';
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ item }) => {

    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const onAdd = (item) => {
        setCount(item.count);
        item.initial = count;
        setIsVisible(true);
    }
    const hideTotal = () => {
        setIsVisible(false);
    }
    useEffect(() => {
    })

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
                            <div>{count} <br /> 
                                <button className="btn btn-outline-secondary m-0" type="button" onClick={hideTotal}>
                                    Agregar mas
                                </button>
                            </div>
                        }
                    </div>
                </div>


            </div>
        </>
    );
}

export default ItemDetail;