import { useState } from "react";
import { useDispatch } from "react-redux";
import { handlerOrder } from "../../redux/actions/actions";

export default function SortFilter({ setCurrentPage, setAct }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleClickOrder(e) {
    e.preventDefault();
    dispatch(handlerOrder(name));
    setCurrentPage(1);
    setAct(`${name}`);
  }

  return (
    <div>
      <select onChange={(e) => setName(e.target.value)}>
        <option className="nav-links" value="asc">
          A-Z
        </option>
        <option className="nav-links" value="desc">
          Z-A
        </option>
      </select>

      <button onClick={handleClickOrder}>Alphabetical Order</button>
    </div>
  );
}
