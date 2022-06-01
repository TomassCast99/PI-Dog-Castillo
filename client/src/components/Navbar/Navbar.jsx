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
      <Link to="/dog">
        <button buttonStyle={"btn--primary"} buttonSize={"btn--large"}>
          Create Dog
        </button>
      </Link>
      {/* <Link to="/">
        <button  buttonStyle={"btn--primary"} buttonSize={"btn--large"}>Create Choco</button>
      </Link> */}
      <Link to="/about">
        <button buttonStyle={"btn--primary"} buttonSize={"btn--large"}>
          About
        </button>
      </Link>
      <Link to="/">
        <button buttonStyle={"btn--primary"} buttonSize={"btn--large"}>
          Log Out
        </button>
      </Link>

      <div className={click ? "nav-menu active " : "nav-menu"}>
        <div className="nav-item">
          <select>
            <option className="nav-links" onClick={closeMobileMenu} value="asc">
              A-Z
            </option>
            <option
              className="nav-links"
              onClick={closeMobileMenu}
              value="desc"
            >
              Z-A
            </option>
          </select>
          <select>
            <option
              className="nav-links"
              onClick={closeMobileMenu}
              value="find"
            >
              Find
            </option>
          </select>
          <select>
            <option
              className="nav-links"
              onClick={closeMobileMenu}
              value="height"
            >
              All Dogs
            </option>
          </select>
          <select>
            <option
              className="nav-links"
              onClick={closeMobileMenu}
              value="temperament"
            >
              Temperament
            </option>
          </select>
          <select>
            <option
              className="nav-links"
              onClick={closeMobileMenu}
              value="weight"
            >
              Created Dogs
            </option>
          </select>
        </div>
      </div>
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

    //       <div className={click ? "nav-menu active " : "nav-menu"}>
    //         <div className="nav-item">
    //           <Link to="/" className="nav-links" onClick={closeMobileMenu}>
    //             Home
    //           </Link>
    //         </div>
    //         <div className="nav-item">
    //           <Link to="/dogs" className="nav-links" onClick={closeMobileMenu}>
    //             Dogs
    //           </Link>
    //         </div>
    //         <div className="nav-item">
    //           <Link to="/dog" className="nav-links" onClick={closeMobileMenu}>
    //             Create
    //           </Link>
    //         </div>
    //         <div className="nav-item">
    //           <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
    //             About
    //           </Link>
    //         </div>
    //       </div>
    //       {button && <Boton buttonStyle="btn--outline">About</Boton>}
    //     </div>
    //   </nav>
    // </>
  );
}

export default Navbar;
