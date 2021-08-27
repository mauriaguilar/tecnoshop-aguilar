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
        console.log(items_id)
        const items = await getItems(items_id);
        console.log(items);
        setItemDetail(items[0]);
      }
      fetchData();
    },[id])


    return (
        <div className="row m-5">

            <div id="itemListContainer" className="col fs-3 ">
                Item Detail of<span className="greeting"> {itemDetail.title} </span>
                {/* <h6>id: {itemDetail.id}</h6> */}
                <div className="card-group">
                    <ItemDetail item={itemDetail}/>
                </div>
            </div>

        </div>
    );
}

export default ItemDetailContainer;