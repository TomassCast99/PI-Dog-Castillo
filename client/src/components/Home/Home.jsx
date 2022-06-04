import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";
import Navbar from "../Navbar/Navbar";
import SortFilter from "../Filters/sortFilter";

import { useSelector, useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions/actions";

// import "../App.css";
// import "./Home.css";

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
    <div>
      <h1>
        HenryDogs <i className="fa-solid fa-paw"></i>
      </h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Reload Dogs
      </button>
      <Navbar paginated={paginado} />
      <SortFilter setCurrentPage={setCurrentPage} setAct={setAct} />
      <Paginated
        dogsPerPage={dogsPerPage}
        useDogs={useDogs.length}
        paginated={paginado}
      />
      {currentDogs.length > 0 ? (
        currentDogs.map((d) => {
          return (
            <div key={d.id}>
              <Card
                name={d.name}
                image={d.image}
                temperament={d.temperament}
                weight={d.weight}
              />
            </div>
          );
        })
      ) : (
        <h1>Ups! Dog not found</h1>
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
