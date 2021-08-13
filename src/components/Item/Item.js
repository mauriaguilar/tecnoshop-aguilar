import React from 'react';
import './Item.css';


const Item = ({title, description, image}) => {

    return (
        <>
            <img src={image} className="card-img-top" alt="..." />

            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text fs-5">{description}</p>
            </div>
        </>
    );
}

export default Item;
