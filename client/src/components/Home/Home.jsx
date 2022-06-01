import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions/actions";
import Paginated from "../Paginated/Paginated";
// import "../App.css";
// import "./Home.css";
import Navbar from "../Navbar/Navbar";

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

  const indexLastDog = currentPage * dogsPerPage;
  const indexFirstDog = indexLastDog - dogsPerPage;
  const currentDogs = useDogs.slice(indexFirstDog, indexLastDog);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Navbar />
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
