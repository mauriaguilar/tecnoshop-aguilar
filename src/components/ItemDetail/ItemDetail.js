import React, {useEffect} from 'react';
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ item, onAdd }) => {

    useEffect(() => {
        console.log(item)
    },[item])

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
                        {/* <ItemCount id={item?.id} title={item?.title} stock={5} initial={1} onAdd={onAdd}/> */}
                    </div>
                </div>

            </div>
        </>
    );
}

export default ItemDetail;