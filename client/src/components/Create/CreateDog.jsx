import React from "react";
import { Link } from "react-router-dom";
import { getTemperaments } from "../../redux/actions/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import "../App.css";}
//import "./CreateDog.css";

import { useForm } from "../hooks/useForm";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";

const initialForm = {
  name: "",
  minHeight: "",
  maxHeight: "",
  minWeight: "",
  maxWeight: "",
  life_span: "",
  image: "",
  temperament: [],
  createdInBd: false,
};

const ValidationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexWeight = /^d/;
  let regexHeight = /^d/;
  let regexLife = /^d/;

  if (!form.name) {
    errors.name = "Enter a 'Name' please";
  } else if (!regexName.test(form.name)) {
    errors.name = "Field 'Name' only accepts letters";
  }

  if (!form.minWeight) {
    errors.minWeight = "Enter a 'Min Weight' please";
  } else if (
    !regexWeight.test(parseInt(form.minWeight) > parseInt(form.maxWeight))
  ) {
    errors.minWeight = "The minimum cannot be greater than the maximum";
  } else if (form.minHeight < 0) {
    errors.minWeight = "Negative numbers are not allowed";
  }

  if (!form.maxWeight) {
    errors.maxWeight = "Enter a 'Max Weight' please";
  } else if (!regexWeight.test(form.maxWeight)) {
    errors.maxWeight = "Only numbers please";
  }

  if (!form.minHeight) {
    errors.minHeight = "Enter a 'Min Height' please";
  } else if (
    !regexHeight.test(parseInt(form.minHeight) > parseInt(form.maxHeight))
  ) {
    errors.minHeight = "The minimum cannot be greater than the maximum";
  } else if (form.minHeight < 0) {
    errors.minHeight = "Negative numbers are not allowed";
  }
  if (!form.maxHeight) {
    errors.maxHeight = "Enter a 'Max Height' please";
  } else if (!regexHeight.test(form.maxHeight)) {
    errors.maxHeight = "Only numbers please";
  }

  if (!form.life_span) {
    errors.life_span = "Enter the life span please";
  } else if (!regexLife.test(form.life_span)) {
    errors.life_span = "Only numbers please";
  }

  if (!form.image) {
    errors.image = "Place an Image";
  }

  if (!form.temperament) {
    errors.temperament = "You have to choose temperaments";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

export default function CreateDog() {
  const [temperament, setTemperament] = useState("All");
  const dispatch = useDispatch;

  const useTemp = useSelector((state) => {
    return state.temperament;
  });
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, ValidationsForm);

  return (
    <div>
      <Link to="/home">
        <button>Go Back</button>
      </Link>
      <h2>Created Dog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type="num"
          name="minHeigth"
          placeholder="Min Height"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.minHeight}
          required
        />
        {errors.minHeight && <p style={styles}>{errors.minHeight}</p>}
        <input
          type="num"
          name="maxHeight"
          placeholder="Max Height"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.maxHeight}
          required
        />
        {errors.maxHeight && <p style={styles}>{errors.maxHeight}</p>}
        <input
          type="num"
          name="minWeight"
          placeholder="Min Weight"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.minWeight}
          required
        />
        {errors.minWeight && <p style={styles}>{errors.minWeight}</p>}
        <input
          type="num"
          name="maxWeight"
          placeholder="Max Weight"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.maxWeight}
          required
        />
        {errors.maxWeight && <p style={styles}>{errors.maxWeight}</p>}
        <input
          type="text"
          name="life_span"
          placeholder="Life Span"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.life_span}
          required
        />
        {errors.life_span && <p style={styles}>{errors.life_span}</p>}
        <input
          type="text"
          name="image"
          placeholder="Img"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.image}
          required
        />
        {errors.image && <p style={styles}>{errors.image}</p>}

        <select
          value={temperament}
          onChange={(e) => setTemperament(e.target.value)}
        >
          <option name="temperament" className="nav-links" value="All">
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
        {errors.temperament && <p style={styles}>{errors.temperament}</p>}

        <input type="submit" value="Send Dog" />
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg="The values was sent correctly" bgColor="#198754" />
      )}
    </div>
  );
}

// function CreateDog() {
//   return (
//     <div className="card">
//       <h1>Create Dog</h1>
//       <div className="card-info">
//         <div class="form__group field">
//           <input
//             required=""
//             placeholder="Name"
//             class="form__field"
//             type="input"
//           />
//           <label class="form__label" for="name">
//             Name
//           </label>
//         </div>
//         <div class="form__group field">
//           <input
//             required=""
//             placeholder="Name"
//             class="form__field"
//             type="input"
//           />
//           <label class="form__label" for="name">
//             Min Height
//           </label>
//         </div>
//         <div class="form__group field">
//           <input
//             required=""
//             placeholder="Name"
//             class="form__field"
//             type="input"
//           />
//           <label class="form__label" for="name">
//             Max Height
//           </label>
//         </div>
//         <div class="form__group field">
//           <input
//             required=""
//             placeholder="Name"
//             class="form__field"
//             type="input"
//           />
//           <label class="form__label" for="name">
//             Min Weight
//           </label>
//         </div>
//         <div class="form__group field">
//           <input
//             required=""
//             placeholder="Name"
//             class="form__field"
//             type="input"
//           />
//           <label class="form__label" for="name">
//             Max Weight
//           </label>
//         </div>
//         <div class="form__group field">
//           <input
//             required=""
//             placeholder="Name"
//             class="form__field"
//             type="input"
//           />
//           <label class="form__label" for="name">
//             Life Span
//           </label>
//         </div>
//         <div class="form__group field">
//           <input
//             required=""
//             placeholder="Name"
//             class="form__field"
//             type="input"
//           />
//           <label class="form__label" for="name">
//             Temperaments
//           </label>
//         </div>

//         {/* <div>
//         <button onClick="">Create Dog</button>
//       </div> */}
//       </div>
//     </div>
//   );
// }
