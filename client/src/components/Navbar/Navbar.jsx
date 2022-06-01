import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div className="nav-container">
      <ul className={click ? "nav-menu active " : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Log Out
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dog" className="nav-links" onClick={closeMobileMenu}>
            Create Dog
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dogs" className="nav-links" onClick={closeMobileMenu}>
            Created Dogs
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/history" className="nav-links" onClick={closeMobileMenu}>
            ¿Since when?
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            About
          </Link>
        </li>
      </ul>
    </div>
    // <>
    //   <nav className="navbar">
    //     <div clasName="navbar-container">
    //       <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
    //         HenryDogs <i className="fa-solid fa-paw"></i>
    //       </Link>
    //       <div className="menu-icon" onClick={handleClick}>
    //         <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
    //       </div>

    ///------------ hasta aca es para renderizar el logo de la navbar, tambien esta el handleClick que sirve para hacer y deshacer el menu hamb

    //       <ul className={click ? "nav-menu active " : "nav-menu"}>
    //         <li className="nav-item">
    //           <Link to="/" className="nav-links" onClick={closeMobileMenu}>
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/dogs" className="nav-links" onClick={closeMobileMenu}>
    //             Dogs
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/dog" className="nav-links" onClick={closeMobileMenu}>
    //             Create
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
    //             About
    //           </Link>
    //         </li>
    //       </ul>
    //       {button && <Boton buttonStyle="btn--outline">About</Boton>}
    //     </div>
    //   </nav>
    // </>
  );
}

export default Navbar;
