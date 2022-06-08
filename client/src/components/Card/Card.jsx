import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ name, image, temperament, weight, id }) {
  return (
    <div className="card">
      <div className="card2">
        <div className="img-container">
          <Link to={`/dogs/${id}`}>
            <img src={image} alt={name}></img>
          </Link>
        </div>
        <div className="info-container">
          <div className="card-info">
            <p className="title">{name}</p>
          </div>
          <div className="card-bio">
            <p>Temperament: {temperament}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
