import React, {} from 'react';
import Item from "../Item/Item"
import ItemCount from "../ItemCount/ItemCount"

const ItemList = ({ items, onAdd }) => {

    return (
        <>
            {
                items.map(item => (
                    <div key={item.id} className="col card me-3 shadow">
                        <Item title={item.title} description={item.description} image={item.pictureUrl} />
                        <ItemCount id={item.id} title={item.title} stock={5} initial={1} onAdd={onAdd}/>
                    </div>
                ))
            }
        </>
    );
}

export default ItemList;