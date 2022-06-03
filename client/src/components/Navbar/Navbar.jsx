import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handleFilter,
  getTemperaments,
  cleanFilters,
} from "../../redux/actions/actions";

import "./Navbar.css";

export default function Navbar({ paginated }) {
  const dispatch = useDispatch();

  const [temperament, setTemperament] = useState("All");
  const [origin, setOrigin] = useState("All");

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

  return (
    <div className="nav-container">
      <Link to="/dog">
        <button>Create Dog</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/">
        <button>Log Out</button>
      </Link>
      <button className="nav-links" onClick={handleCleanFilters} value="all">
        Clean Filters
      </button>
      <div>
        <div className="nav-item">
          <select>
            <option className="nav-links" value="asc">
              A-Z
            </option>
            <option className="nav-links" value="desc">
              Z-A
            </option>
          </select>
          <select>
            <option className="nav-links" value="find">
              Find
            </option>
          </select>
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
    </div>
  );
}
