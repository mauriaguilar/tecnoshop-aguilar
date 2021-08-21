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

    const [cart, setCart] = useState([]);
    const onAdd = (item) => {
        console.log("Adding item to cart.");
        let this_cart = [...cart];

        for (let i=0; i<this_cart.length; i++){
            if (this_cart[i].title === item.title) {
                this_cart[i].count += item.count;
                setCart(this_cart);
                console.log(this_cart);
                return;
            }
        }
        if (item.count > 0)
            this_cart.push(item);
        setCart(this_cart);
        console.log(this_cart);
    }
 
    return (
    <>
        Category: {id}<br/>
        <div className="row m-5 border border-dark">
            <div id="itemListContainer" className="col fs-3 ">
                Hi <span className="greeting">{ greeting }</span>,
                these are our innovative products!
                <div className="card-group">
                    <ItemList items={itemList} onAdd={onAdd}/>
                </div>
            </div>

            <div className="w-100">
                <b>Cart List:</b><br /> {
                    cart.map(item => (
                        <div key={item.title}>* {item.title}: {item.count}</div>
                    ))
                }
            </div>

        </div>
    </>
    );
}

export default ItemListContainer;