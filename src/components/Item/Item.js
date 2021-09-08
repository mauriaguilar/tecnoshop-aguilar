import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, title, description, image }) => {
  return (
    <>
      <Link to={id ? `/item/${id}` : "#"} className="item-link">
        <img src={image} className="card-img-top" alt="..." />

        <div className="card-body card-sizing">
          <h5 className="card-title">{title}</h5>
          <p className="card-text fs-5">{description}</p>
        </div>
      </Link>
    </>
  );
};

export default Item;
