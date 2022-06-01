import React from "react";
import { Link } from "react-router-dom";
import { Boton } from "../Button/Boton";
import "./landingPage.css";

export default function LandingPage() {
  return (
    <div>
      <h1 className="tittle">¡Welcome to HenryDogs!</h1>
      <p>This is a website fou our four paws friends</p>
      <Link to="/">
        <Boton buttonStyle={"btn--outline"} buttonSize={"btn--large"}>
          View dogs
        </Boton>
      </Link>
    </div>
  );
}
