import React from 'react';
import Item from "../Item/Item"
import ItemCount from "../ItemCount/ItemCount"

const ItemList = ({ items }) => {
    const onAdd = (item) => {
        console.log("Adding item to cart...");
    }

    return (
        <>
            <div className="row">
            {
                items.map(item => (
                    <div key={item.id} className="col-3 card m-3 p-0 shadow">
                        <Item id={item.id} title={item.title} description={item.description} image={item.pictureUrl} />
                        <ItemCount id={item.id} title={item.title} stock={5} initial={1} onAdd={onAdd}/>
                    </div>
                ))
            }
            </div>
        </>
    );
}

export default ItemList;