import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import {getItemsByCategory, getItems} from "../../apiMock";
import { useParams } from 'react-router-dom';
import Firebase from "../../firebase"

const ItemListContainer = ({ greeting }) => {
    const [itemList, setItemList] = useState([{
        id: 0, title: "loading...", description: "loading...",
        initial: 0, stock: 0,
        pictureUrl: "https://lorempixel.com/g/400/200/abstract/10/"
    }]);
    const { id } = useParams();

    // 1) Using ApiMock
    useEffect(() => {
        async function fetchData() {
            const all_items = ["*"];
            const items = id ? await getItemsByCategory(id) : await getItems(all_items);
            console.log(items);
            // setItemList(items);
        }
      fetchData();
    },[id])
    console.log("renderizando")

    // 2) Using Firebase
    useEffect(() => {
        // GET: Getting Catalog
        console.log("obtiendo item detail")
        Firebase.getItems({
            field: "id",
            condition: "==",
            value: id
        }).then((docs) => {
            const arr = [];
            docs.forEach((item) => {
                arr.push(item.data());
            });
            console.log(arr);
            setItemList(arr);
        })
    })

    return (
    <>
        <div className="row ms-5">
        <h2>{id}</h2>
        </div>
        <div className="row m-5 mt-0">
            <div id="itemListContainer" className="col fs-3 ">
                Hi <span className="greeting">{ greeting }</span>,
                these are our innovative products!
                <div className="card-group">
                    <ItemList items={itemList}/>
                </div>
            </div>

        </div>
    </>
    );
}

export default ItemListContainer;