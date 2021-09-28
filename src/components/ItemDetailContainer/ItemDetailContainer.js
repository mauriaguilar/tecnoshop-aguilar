import React, {useState, useEffect, useContext} from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import ItemDetail from "../ItemDetail/ItemDetail";
import Firebase from "../../firebase"

const ItemDetailContainer = ({ category }) => {
    const [itemDetail, setItemDetail] = useState({
        id: 0, title: "...", price: "...",
        pictureUrl: "https://lorempixel.com/g/400/200/abstract/10/"
    });

    const { id } = useParams();
    const cart = useContext(CartContext);

    useEffect(() => {
        // Get Catalog
        Firebase.get(`items2/${id}`).then((doc) => {
            // Setting item id
            let item_doc = doc.data();
            item_doc.id = doc.id;
            // Setting item stock: Avoiding (items in cart > items in stock)
            let elem = cart.items.find(elem => elem.item.id === item_doc.id);
            let quantity = (elem === undefined) ? 0 : elem.quantity;
            item_doc.stock = item_doc.stock - quantity;
            if (item_doc.stock === 0) {
                item_doc.initial = 0;
            }
            setItemDetail(item_doc);
        })
    }, [cart.items, id])

    return (
        <div className="row m-5">

            <div className="col-1"></div>

            <div id="itemListContainer" className="col fs-3">
                Item Detail of<span className="greeting"> {itemDetail.title}</span>
                <div className="card-group">
                    <ItemDetail item={itemDetail}/>
                </div>
            </div>

            <div className="col-1"></div>

        </div>
    );
}

export default ItemDetailContainer;