import React, {useState, useEffect, useContext} from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import ItemDetail from "../ItemDetail/ItemDetail";
// import getItems from "../../apiMock";
import Firebase from "../../firebase"

const ItemDetailContainer = ({ category }) => {
    const [itemDetail, setItemDetail] = useState({
        id: 0, title: "...", price: "...",
        pictureUrl: "https://lorempixel.com/g/400/200/abstract/10/"
    });
    // console.log("rendering ItemDetailContainer...");

    const { id } = useParams();
    const cart = useContext(CartContext);

    // 1) Using ApiMock
    useEffect(() => {async function fetchData() {
        // console.log("Searching items");
        // const id_of_item = id ? id : 'fb231439-9ae0-4d67-bd9b-e8bfa95cc35a';
        // const items_id = [id_of_item]
        // console.log(items_id)
        // const items = await getItems(items_id);
        // console.log(items);
        // setItemDetail(items[0]);
      }
      fetchData();
    },[id])

    // 2) Using Firebase
    useEffect(() => {
        console.log("getting item detail for id=" + id);

        // GET: Getting Catalog
        Firebase.get(`items2/${id}`).then((doc) => {
            console.log("Request to Firebase ok.");
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
            // Setting item detail
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