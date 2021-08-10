import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList"
import React, {useState, useEffect} from 'react';


const ItemListContainer = ({ greeting }) => {

    return (
        <div className="row m-5 border border-dark">
            
            <div id="itemListContainer" className="col fs-3 ">
                Hi <span className="greeting">{ greeting }</span>,
                these are our innovative products!
                <div className="card-group">
                    <ItemList />
                </div>
            </div>

        </div>
    );
}

export default ItemListContainer;