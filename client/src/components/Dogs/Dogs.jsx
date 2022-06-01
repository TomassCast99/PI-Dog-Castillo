import React from "react";

/** en el componente CardDog de la linea 15 hay que colocar el src de la imagen de los perros
 * un text
 * una label
 * y el path a /dogs
 */

export default function Card({ name, image, temperament, weight }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt="perro" width="200px" height="100px" />
      <h4>Temperament: {temperament}</h4>
      <h4>Weight: {weight}</h4>
    </div>
  );
}
