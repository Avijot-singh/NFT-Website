import React from "react";
import "../style/card.css";

const Card = ({ image, name, description, price }) => {
  return (
    <div className="card">
      <img src={image} alt={description} className="card-image" />
      <div className="card-info">
        <div className="card-name">{name}</div>
        <div className="card-price">{price}</div>
        <div className="card-description">{description}</div>
      </div>
    </div>
  );
};

export default Card;
