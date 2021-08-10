import Item from "../Item/Item"
import React, {useState, useEffect} from 'react';
import ItemCount from "../ItemCount/ItemCount"

const ItemList = ({ greeting }) => {

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
        <>
            <div className="card">
                <Item name="Card title" description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." image="http://lorempixel.com/400/200/technics/" />
                <ItemCount name="Card title" stock={5} initial={1} onAdd={onAdd}/>
            </div>

            <div className="w-100">
                Cart List:<br /> {list}
            </div>
        </>
    );
}

export default ItemList;