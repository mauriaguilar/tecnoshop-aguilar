import './ItemListContainer.css';
import ItemCount from "../ItemCount/ItemCount"


const ItemListContainer = ({ greeting }) => {
    let cart = {};

    const onAdd = (item) => {
        console.log("Adding item to cart.");
        if (item.name in cart)
            cart[item.name] += item.count;
        else
            cart[item.name] = item.count;
        console.log("Cart:");
        console.log(cart);
    }

    return (
        <div className="row m-5 border border-dark">
            <div id="itemListContainer" className="col fs-3 ">
                Hi <span className="greeting">{ greeting }</span>,
                these are our innovative products!
                <div className="card-group">
                    <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;