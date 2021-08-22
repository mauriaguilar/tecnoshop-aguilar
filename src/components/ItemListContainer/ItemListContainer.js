import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import {getItemsByCategory} from "../../apiMock";
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [itemList, setItemList] = useState([{
        id: 0, title: "loading...", description: "loading...",
        pictureUrl: "https://lorempixel.com/g/400/200/abstract/10/"
    }]);
    const { id } = useParams();

    useEffect(() => {async function fetchData() {
        console.log("Searching items");
        // let items_id = ["*"];
        // const items = await getItems(items_id);
        const items = await getItemsByCategory(id);
        setItemList(items);
        console.log(items);
      }
      fetchData();
    },[id])

    return (
    <>
        <div className="row ms-5">
        <h2>{id}</h2>
        </div>
        <div className="row m-5 border border-dark">
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