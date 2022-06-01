import React from "react";
import "./Boton.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Boton = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const typeButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const typeButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/home" className="btn-mobile">
      <button
        className={`btn ${typeButtonStyle} ${typeButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
