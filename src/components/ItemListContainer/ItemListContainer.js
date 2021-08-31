import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import {getItemsByCategory, getItems} from "../../apiMock";
import { useParams } from 'react-router-dom';
import {RequestItems} from "../../firebase"

const ItemListContainer = ({ greeting }) => {
    const [itemList, setItemList] = useState([{
        id: 0, title: "loading...", description: "loading...",
        initial: 0, stock: 0,
        pictureUrl: "https://lorempixel.com/g/400/200/abstract/10/"
    }]);
    const { id } = useParams();

    useEffect(() => {
        
    })

    useEffect(() => {async function fetchData() {
        const all_items = ["*"];
        const items = id ? await getItemsByCategory(id) : await getItems(all_items);
        console.log(items);
        setItemList(items);
      }
      fetchData();
    },[id])

    return (
    <>
        <RequestItems/>
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