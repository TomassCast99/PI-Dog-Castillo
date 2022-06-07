import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ name, image, temperament, weight, id }) {
  return (
    <div className="card">
      <div class="card2">
        <div class="img-container">
          <Link to={`/dogs/${id}`}>
            <img src={image} alt={name}></img>
          </Link>
        </div>
        <div className="info-container">
          <div class="card-info">
            <p class="title">{name}</p>
          </div>
          <div class="card-bio">
            <p>Temperament: {temperament}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// {

// }
// <div class="card">
//       <div class="card2"></div>
//     </div>

//  <div class="card">
//       {/* <figure className="card_item_pic-wrap">
//         <Link to={`/dogs/${id}`}>
//           <img src={image} alt={name} className="card_item_img" />
//         </Link>
//       </figure>  */}
//       <div class="card-info">
//         <p class="title">{name}</p>
//         <p class="subtitle">Web Dev</p>
//       </div>
//       <div class="card-bio">
//         <p>Temperament: {temperament}</p>
//         <p>Weight: {weight}</p>
//       </div>
//     </div>
