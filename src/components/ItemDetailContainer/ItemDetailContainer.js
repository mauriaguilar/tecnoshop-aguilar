import React, {useState, useEffect} from 'react';
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
    const { id } = useParams();
    console.log("rendering ItemDetailContainer...");

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
        // GET: Getting Catalog
        console.log("getting item detail for id=" + id);
        Firebase.getItems({
            field: "id",
            condition: "==",
            value: id
        }).then((docs) => {
            console.log("Request to Firebase ok.");
            docs.forEach((item) => {
                setItemDetail(item.data());
            });
        })
    }, [id])

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