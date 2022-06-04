import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs, getName } from "../../redux/actions/actions";
//import "../CSS/Search.css";

export default function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  function handleInputChange(e) {
    setName(e.target.value);
    dispatch(getName(name));
  }

  return (
    <div>
      <div className="search">
        <input
          onChange={(e) => handleInputChange(e)}
          type="text"
          placeholder="Search Dog..."
          className="buscador"
          value={name}
        />
      </div>
    </div>
  );
}
