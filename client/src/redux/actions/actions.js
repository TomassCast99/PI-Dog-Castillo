import axios from "axios";

export function getDogs() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/dogs")
      .then((res) => {
        return dispatch({
          type: "GET_ALL_DOGS",
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
}

export function getTemperaments() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/temperament")
      .then((res) => {
        return dispatch({
          type: "GET_ALL_TEMPERAMENTS",
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
}

export function getName(name) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/dogs?name=` + name)
      .then((res) => {
        return dispatch({
          type: "GET_NAME_DOGS",
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
}

export function getDetail(id) {
  return function (dispatch) {
    console.log("aca act", id);
    axios
      .get("http://localhost:3001/dogs/" + id)
      .then((res) => {
        return dispatch({
          type: "GET_DETAILS",
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
}

export function postDog(payload) {
  return async function () {
    const create = await axios.post("http://localhost:3001/dog", payload);
    return create;
  };
}

export function handlerOrder(payload) {
  return {
    type: "HANDLER_NAME",
    payload: payload,
  };
}

export function handlerWeight(payload) {
  return {
    type: "HANDLER_WEIGHT",
    payload: payload,
  };
}

export function handleFilter(payload) {
  return {
    type: "HANDLE_FILTERS",
    payload: payload,
  };
}

export function cleanFilters(payload) {
  return {
    type: "CLEAN_FILTERS",
    payload: payload,
  };
}

export function resState() {
  return {
    type: "RES_STATE",
  };
}
