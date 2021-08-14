import React, {useState, useEffect} from 'react';
import Item from "../Item/Item"
import ItemCount from "../ItemCount/ItemCount"

const ItemList = ({ item, onAdd }) => {

    useEffect(() => {
        console.log(item)
    },[item])
    return (
        <>
            <div key={item?.id} className="card me-3 shadow">
                <Item title={item?.title} description={item?.description} image={item?.pictureUrl} />
                <ItemCount id={item?.id} title={item?.title} stock={5} initial={1} onAdd={onAdd}/>
            </div>
        </>
    );
}

export default ItemList;