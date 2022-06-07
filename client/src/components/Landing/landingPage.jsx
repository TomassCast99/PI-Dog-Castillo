import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

export default function LandingPage() {
  return (
    <div className="container">
      <h1 className="tittle">¡Welcome to HenryDogs!</h1>
      <h2 className="sub-tittle">
        This is a website for our four paws friends
      </h2>
      <p className="content">
        ¡On this site you can see the different breeds of dogs, their details
        and create a dog!
      </p>
      <Link to="/home">
        <button className="btn-land">View dogs</button>
      </Link>
    </div>
  );
}
