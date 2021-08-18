import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import getItems from "../../apiMock";
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [itemList, setItemList] = useState([{
        id: 0, title: "loading...", description: "loading...",
        pictureUrl: "https://lorempixel.com/g/400/200/abstract/10/"
    }]);
    const { id } = useParams();

    useEffect(() => {async function fetchData() {
        console.log("Searching items");
        let items_id = [
            'd64cb826-416d-4b86-a528-d4fec79555fb',
            'baead852-0a20-4a78-ace9-61f63d3f6672',
            '9cec2487-e544-40c6-b112-81d47edd7b10',
            'fb231439-9ae0-4d67-bd9b-e8bfa95cc35a',
            'ebb76000-c738-476c-b3fd-34704b567c74'
        ];
        if (id === "Smartphones")
            items_id = ['d64cb826-416d-4b86-a528-d4fec79555fb'];
        else if (id === "Smartwatches")
            items_id = ['baead852-0a20-4a78-ace9-61f63d3f6672'];
        else if (id === "Batteries")
            items_id = ['9cec2487-e544-40c6-b112-81d47edd7b10'];
        else if (id === "Speakers")
            items_id = ['fb231439-9ae0-4d67-bd9b-e8bfa95cc35a'];
        else if (id === "Accessories")
            items_id = ['ebb76000-c738-476c-b3fd-34704b567c74'];
        const items = await getItems(items_id);
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