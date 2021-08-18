import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from "../ItemDetail/ItemDetail";
import getItems from "../../apiMock";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ category }) => {
    const [itemDetail, setItemDetail] = useState({
        id: 0, title: "loading...", description: "loading...",
        pictureUrl: "https://lorempixel.com/g/400/200/abstract/10/"
    });
    const { id } = useParams();

    useEffect(() => {async function fetchData() {
        console.log("Searching items");
        const id_of_item = id ? id : 'fb231439-9ae0-4d67-bd9b-e8bfa95cc35a';
        const items_id = [id_of_item]
        const items = await getItems(items_id);
        setItemDetail(items[0]);
        console.log(items[0]);
      }
      fetchData();
    },[])

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
        <div className="row m-5 border border-dark">
            
            <div id="itemListContainer" className="col fs-3 ">
                Item Detail of Category <span className="greeting">{ category }</span>
                <div className="card-group">
                    <ItemDetail item={itemDetail} onAdd={onAdd}/>
                </div>
            </div>

            <div className="w-100">
                {/* <b>Cart List:</b><br /> {
                    cart.map(item => (
                        <div key={item.title}>* {item.title}: {item.count}. </div>
                        // Total: $ {item.price * item.count}
                    ))
                } */}
            </div>

        </div>
    );
}

export default ItemDetailContainer;