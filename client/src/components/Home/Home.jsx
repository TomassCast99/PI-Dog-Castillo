import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";
import Navbar from "../Navbar/Navbar";
import SortFilter from "../Filters/sortFilter";

import { useSelector, useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions/actions";
import { Link } from "react-router-dom";

// import "../App.css";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const useDogs = useSelector((state) => {
    return state.allDogs;
  });
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);

  const [act, setAct] = useState("");

  const indexLastDog = currentPage * dogsPerPage;
  const indexFirstDog = indexLastDog - dogsPerPage;
  const currentDogs = useDogs.slice(indexFirstDog, indexLastDog);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }

  return (
    <div className="home-container">
      <h1>HenryDogs</h1>
      <button
        className="home-btn"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Reload Dogs
      </button>
      <Link to={"/dog"}>Create Dog</Link>
      <Navbar paginated={paginado} />
      <SortFilter
        setCurrentPage={setCurrentPage}
        setAct={setAct}
        className="home-btn"
      />
      <Paginated
        dogsPerPage={dogsPerPage}
        useDogs={useDogs.length}
        paginated={paginado}
      />
      {currentDogs.length > 0 ? (
        currentDogs.map((d) => {
          return (
            <div key={d.id} className="card-container">
              <Card
                id={d.id}
                name={d.name}
                image={d.image}
                temperament={d.temperament}
                weight={d.weight}
              />
            </div>
          );
        })
      ) : (
        <p>Ups! Dog not found</p>
      )}
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
