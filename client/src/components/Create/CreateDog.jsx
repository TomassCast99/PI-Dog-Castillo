import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTemperaments,
  resState,
  postDog,
} from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./CreateDog.css";
import { validation } from "../Validations/Validation";

export default function DogCreate() {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((e) => e.temperament);

  const [input, setInput] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minlife_span: "",
    maxlife_span: "",
    image: "",
    temperament: [],
    createdInBd: false,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getTemperaments());
    dispatch(resState(resState));
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    let crear = {
      name: input.name,
      height: `${input.minHeight} - ${input.maxHeight}`,
      weight: `${input.minWeight} - ${input.maxWeight}`,
      life_span: `${input.minlife_span} - ${input.maxlife_span} years`,
      image: input.image,
      temperament: input.temperament.join(", "),
    };
    console.log(crear.temperament);
    dispatch(postDog(crear));
    setInput({
      name: "",
      minHeight: "",
      maxHeight: "",
      minWeight: "",
      maxWeight: "",
      minlife_span: "",
      maxlife_span: "",
      image: "",
      temperament: [],
      createdInBd: true,
    });
    alert("Dog successfully create");
  }
  function handelChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelectTemperament(e) {
    if (!input.temperament.includes(e.target.value)) {
      setInput({
        ...input,
        temperament: [...input.temperament, e.target.value],
      });
    }
  }
  function handleDelete(e) {
    e.preventDefault();
    setInput({
      ...input,
      temperament: input.temperament.filter((temp) => temp !== e.target.value),
    });
  }

  return (
    <div className="formPerfil">
      <div className="up-things">
        <Link to="/home">
          <button className="boton">Home</button>
        </Link>
      </div>
      <div>
        <h1 className="titleForm">Create Dog</h1>
      </div>

      <div className="form" onSubmit={resState}>
        <div>
          <label className="title5">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Dog breed"
            value={input.name}
            onChange={(e) => handelChange(e)}
          />

          <strong>{errors.name}</strong>
        </div>
        <div>
          <label className="title5">Height min:</label>
          <input
            type="number"
            name="minHeight"
            placeholder="Centimeters"
            value={input.minHeight}
            onChange={(e) => handelChange(e)}
          />

          <strong>{errors.minHeight}</strong>
        </div>
        <div>
          <label className="title5">Height max:</label>
          <input
            type="number"
            name="maxHeight"
            placeholder="Centimeters"
            value={input.maxHeight}
            onChange={(e) => handelChange(e)}
          />

          <strong>{errors.maxHeight}</strong>
        </div>
        <div>
          <label className="title5">Weight min:</label>
          <input
            type="number"
            name="minWeight"
            placeholder="Kilograms"
            value={input.minWeight}
            onChange={(e) => handelChange(e)}
          />

          <strong>{errors.minWeight}</strong>
        </div>
        <div>
          <label className="title5">Weight max:</label>
          <input
            type="number"
            name="maxWeight"
            placeholder="Kilograms"
            value={input.maxWeight}
            onChange={(e) => handelChange(e)}
          ></input>

          <strong>{errors.maxWeight}</strong>
        </div>
        <div>
          <label className="title5">Life span min:</label>
          <input
            type="number"
            name="minlife_span"
            placeholder="Years"
            value={input.minlife_span}
            onChange={(e) => handelChange(e)}
          />

          <strong>{errors.minlife_span}</strong>
        </div>
        <div>
          <label className="title5">Life span max:</label>
          <input
            type="number"
            name="maxlife_span"
            placeholder="Years"
            value={input.maxlife_span}
            onChange={(e) => handelChange(e)}
          />

          <strong>{errors.maxlife_span}</strong>
        </div>
        <div>
          <label name="image" className="title5">
            Image:
          </label>
          <input
            name="image"
            value={input.image}
            placeholder="URL"
            onChange={(e) => handelChange(e)}
          ></input>
        </div>
        <div>
          <label className="title5" value="temperament" name="temperament">
            {" "}
            Temperament:{" "}
          </label>
          <select
            className="boton6"
            onChange={(e) => handleSelectTemperament(e)}
          >
            <option>Temperaments</option>
            {allTemperaments &&
              allTemperaments
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((e) => (
                  <option key={e.id} value={e.name}>
                    {e.name}
                  </option>
                ))}
          </select>

          {input.temperament.map((nombre, i) => {
            return (
              <div key={i} className="concatFiltro">
                <button
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    borderRadius: "50%",
                  }}
                  onClick={handleDelete}
                  value={nombre}
                >
                  X
                </button>
                <span>{nombre}</span>
              </div>
            );
          })}
        </div>

        <div>
          <button
            className="boton6"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            {" "}
            Create new Dog
          </button>
        </div>
      </div>
    </div>
  );
}
