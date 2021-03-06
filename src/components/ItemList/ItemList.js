import React from 'react';
import Item from "../Item/Item"

const ItemList = ({ items }) => {

    return (
        <>
            <div className="row">
            {
                items.map(item => (
                    <div key={item.id} className="col-12 card m-3 p-0 shadow">
                        <Item id={item.id} title={item.title} description={item.description} image={item.pictureUrl} />
                    </div>
                ))
            }
            </div>
        </>
    );
}

export default ItemList;