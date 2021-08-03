import './ItemListContainer.css';
import ItemCount from "./ItemCount"

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="row m-5 border border-dark">
            <div id="itemListContainer" className="col fs-3 ">
                Hi <span className="greeting">{ greeting }</span>,
                these are our innovative products!
                <div class="card-group">
                    <ItemCount />
                    <ItemCount />
                    <ItemCount />
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;