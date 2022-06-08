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
      <div className="navbar">
        <h1>HenryDogs</h1>

        <button
          className="home-btn"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Reload Dogs
        </button>
        <button className="create-dog">
          <Link to={"/dog"}>Create Dog</Link>
        </button>
        <SortFilter
          setCurrentPage={setCurrentPage}
          setAct={setAct}
          className="sort"
        />
      </div>
      <Navbar paginated={paginado} />
      <div className="main">
        <div className="paginado">
          <Paginated
            dogsPerPage={dogsPerPage}
            useDogs={useDogs.length}
            paginated={paginado}
          />
        </div>
        <div className="card-dogs">
          {currentDogs.length > 0 ? (
            currentDogs.map((d) => {
              return (
                <Card
                  key={d.id}
                  id={d.id}
                  name={d.name}
                  image={d.image}
                  temperament={d.temperament}
                  weight={d.weight}
                />
              );
            })
          ) : (
            <p>Ups! Dog not found</p>
          )}
        </div>
      </div>
    </div>
  );
}
