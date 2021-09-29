import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import Firebase from "../../firebase"

const ItemListContainer = ({ greeting }) => {
    const [itemList, setItemList] = useState([{
        id: 0, title: "loading...", description: "loading...",
        initial: 0, stock: 0,
        pictureUrl: "https://lorempixel.com/g/400/200/abstract/10/"
    }]);

    const { id } = useParams();

    // Using Firebase
    useEffect(() => {
        // GET: Getting Catalog
        Firebase.getAll("items2", {
            field: "category",
            condition: "==",
            value: id
        }).then((docs) => {
            const arr = [];
            docs.forEach((item) => {
                arr.push(item.data());
                arr[arr.length-1].id = item.id;
            });
            setItemList(arr);
        })
    }, [id])

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