import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ name, image, temperament, weight, id }) {
  return (
    <div className="card">
      <div className="card__content">
        <h3 className="card__title">{name}</h3>
        <figure className="card_item_pic-wrap">
          <Link to={`/dogs/${id}`}>
            <img src={image} alt={name} className="card_item_img" />
          </Link>
        </figure>
        <h4 className="card__description">Temperament: {temperament}</h4>
        <h4 className="card__description">Weight: {weight}</h4>
      </div>
    </div>
  );
}
