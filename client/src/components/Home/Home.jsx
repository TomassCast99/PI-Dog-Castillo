import React from "react";
// import "../App.css";
import "./Home.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions/actions";
import Cards from "../Cards/Cards";

import { Boton } from "../Button/Boton";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const [dogsPerPage, setDogsPerPage] = useState(8);

  // hay que seguir el video de selene, solo llegaste al minuto 3 drogon

  return (
    <div>
      <Navbar />
      <select>
        <option vale="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <select>
        <option value="find">Find</option>
      </select>
      <select>
        <option value="height">Height</option>
      </select>
      <select>
        <option value="temperament">Temperament</option>
      </select>
      <select>
        <option value="weight">Weight</option>
      </select>
      <Cards />
    </div>
  );
}

// function Home() {
//   return (
//     <div className="home-container">
//       <h1>Welcome Dog lovers</h1>
//       <p>This is a web site for our four paws friends</p>
//       <div className="home-btn">
//         <Boton
//           className="btn"
//           buttonStyle="btn--outline"
//           buttonSize="btn--large"
//         >
//           LETS SEE
//         </Boton>
//         <Footer></Footer>
//       </div>
//     </div>
//   );
// }

// export default Home;
