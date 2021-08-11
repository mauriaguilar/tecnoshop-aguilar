import React, {useState, useEffect} from 'react';
import Item from "../Item/Item"
import ItemCount from "../ItemCount/ItemCount"

const ItemList = ({ items }) => {

    const [cart, setCart] = useState({});
    const [list, setList] = useState("...");

    const onAdd = (item) => {
        console.log("Adding item to cart.");

        let this_cart = {...cart};

        if (item.title in cart)
            this_cart[item.title] += item.count;
        else
            this_cart[item.title] = item.count;

        setCart(this_cart);
    }
    
    useEffect(() => {
        let string_list = "";
        for (const key in cart)
            string_list += ("* " + key + ": " + cart[key]);

        setList(string_list);
        console.log(items);
    }, [cart, items])

    return (
        <>
            {
                items.map(item => (
                    <div key={item.id} className="card">
                        <Item title={item.title} description={item.description} image={item.pictureUrl} />
                        <ItemCount id={item.id} title={item.title} stock={5} initial={1} onAdd={onAdd}/>
                    </div>
                ))
            }
            <div className="w-100">
                Cart List:<br /> {list}
            </div>
        </>
    );
}

export default ItemList;