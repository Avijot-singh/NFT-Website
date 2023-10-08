import React from "react";
import "../style/card.css";
import { Link } from "react-router-dom";

const Card = ({ id, image, name, description, price }) => {
  return (
    <Link to={`/nft/${id}`}>
      <div className="card">
        <img src={image} alt={description} className="card-image" />
        <div className="card-info">
          <div className="card-name">{name}</div>
          <div className="card-price">{price}</div>
          <div className="card-description">{description}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
