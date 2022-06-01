import React, { useEffect, useState } from "react";
import Card from "../Dogs/Dogs";
import { useSelector, useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions/actions";
import Paginated from "../Paginated/Paginated";

export default function Cards() {
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

// <>
//   <li className="card_item">
//     <Link className="card_item_link">
//       <figure className="card_item_pic-wrap">
//         <img src="/" alt="Nombre Perro" className="card_item_img"></img>
//       </figure>
//       <div className="card_item_info">
//         <h5 className="card_item_name">sadfasdf</h5>
//       </div>
//     </Link>
//   </li>
// </>