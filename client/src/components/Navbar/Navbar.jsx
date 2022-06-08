import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handleFilter,
  getTemperaments,
  cleanFilters,
  handlerWeight,
} from "../../redux/actions/actions";

import "./Navbar.css";
import Search from "../SearchBar/searchBar";

export default function Navbar({ paginated }) {
  const dispatch = useDispatch();

  const [temperament, setTemperament] = useState("All");
  const [origin, setOrigin] = useState("All");

  const [weight, setWeight] = useState("Todos");

  const useTemp = useSelector((state) => {
    return state.temperament;
  });
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleClickFilter(e) {
    e.preventDefault();
    dispatch(handleFilter({ temperament, origin }));
  }

  const handleCleanFilters = (e) => {
    e.preventDefault();
    dispatch(cleanFilters());
  };

  function handleClickWeight(e) {
    e.preventDefault();
    dispatch(handlerWeight(weight));
  }

  return (
    <div className="nav-container">
      <div>
        <Link to="/">
          <button className="log-out">Log Out</button>
        </Link>
      </div>

      <div>
        <button className="nav-links" onClick={handleCleanFilters} value="all">
          Clean Filters
        </button>
      </div>
      <div>
        <select value={weight} onChange={(e) => setWeight(e.target.value)}>
          <option className="nav-links" value="Todos">
            All
          </option>
          <option className="nav-links" value="light">
            Light-Heavy
          </option>
          <option className="nav-links" value="heavy">
            Heavy-Light
          </option>
        </select>
        <button onClick={(e) => handleClickWeight(e)}>Order weight</button>
      </div>

      <div>
        <Search />
      </div>
      <div>
        <select
          value={temperament}
          onChange={(e) => setTemperament(e.target.value)}
        >
          <option className="nav-links" value="All">
            Temperament
          </option>
          {useTemp &&
            useTemp
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((t) => (
                <option key={t.id} value={t.name}>
                  {" "}
                  {t.name}{" "}
                </option>
              ))}
        </select>
      </div>

      <div>
        <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
          <option className="nav-links" value="All">
            All Dogs
          </option>
          <option className="nav-links" value="apiDogs">
            Dogs
          </option>
          <option className="nav-links" value="dbDogs">
            Created Dogs
          </option>
        </select>
        <button onClick={(e) => handleClickFilter(e)}>Filter</button>
      </div>
    </div>
  );
}
