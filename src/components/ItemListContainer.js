import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="row m-5 border border-dark">
            <div id="itemListContainer" className="col fs-3 ">
                Hi <span className="greeting">
                    { greeting }
                </span>
            </div>
        </div>
    );
}

export default ItemListContainer;