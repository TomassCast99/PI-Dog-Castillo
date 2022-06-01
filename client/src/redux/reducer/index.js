const initialState = {
  dogs: [],
  temperament: [],
  detail: [],
  allDogs: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_ALL_DOGS":
      return {
        ...state,
        allDogs: payload,
      };
    case "GET_ALL_TEMPERAMENTS":
      return {
        ...state,
        temperament: payload,
      };
    case "FILTER_TEMP":
      const allBreeds = state.allDogs;
      const filterTemperament =
        payload === "All"
          ? allBreeds
          : allBreeds.filter((e) => {
              if (e.temperament) {
                if (e.temperament.includes(payload)) {
                  return e;
                }
              }
              return false;
            });
      return {
        ...state,
        dogs: filterTemperament,
      };
    case "GET_NAME":
      return {
        ...state,
        dogs: payload,
      };
    case "GET_DETAILS":
      return {
        ...state,
        detail: payload,
      };
    default:
      return state;
  }
}
