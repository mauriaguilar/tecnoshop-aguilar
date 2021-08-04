import './ItemListContainer.css';
import ItemCount from "./ItemCount"

const onAdd = (num_of_items) => {
    console.log("Adding " + num_of_items + " to cart.")
}

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="row m-5 border border-dark">
            <div id="itemListContainer" className="col fs-3 ">
                Hi <span className="greeting">{ greeting }</span>,
                these are our innovative products!
                <div className="card-group">
                    <ItemCount stock="5" initial="1" onAdd="onAdd()"/>
                    <ItemCount stock="5" initial="1" onAdd="onAdd()"/>
                    <ItemCount stock="5" initial="1" onAdd="onAdd()"/>
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;