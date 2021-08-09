import './ItemListContainer.css';
import ItemCount from "../ItemCount/ItemCount"
import React, {useState, useEffect} from 'react';


const ItemListContainer = ({ greeting }) => {

    const [cart, setCart] = useState({});
    const [list, setList] = useState("...");

    const onAdd = (item) => {
        console.log("Adding item to cart.");

        let this_cart = {...cart};

        if (item.name in cart)
            this_cart[item.name] += item.count;
        else
            this_cart[item.name] = item.count;

        setCart(this_cart);
    }
    
    useEffect(() => {
        let string_list = "";
        for (const key in cart)
            string_list += ("* " + key + ": " + cart[key]);

        setList(string_list);
    }, [cart])



    return (
        <div className="row m-5 border border-dark">
            <div id="itemListContainer" className="col fs-3 ">
                Hi <span className="greeting">{ greeting }</span>,
                these are our innovative products!
                <div className="card-group">
                    <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                </div>
            </div>
            <div>
                Cart List:<br /> {list}
            </div>
        </div>
    );
}

export default ItemListContainer;