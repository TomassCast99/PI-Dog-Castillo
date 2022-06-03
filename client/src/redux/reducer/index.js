const initialState = {
  dogs: [],
  allDogs: [],
  temperament: [],
  detail: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_ALL_DOGS":
      return {
        ...state,
        dogs: payload,
        allDogs: payload,
      };

    case "GET_ALL_TEMPERAMENTS":
      return {
        ...state,
        temperament: payload,
      };

    case "HANDLE_FILTERS":
      let allDogs = state.dogs;
      const { temperament, origin } = payload;
      if (temperament !== "All") {
        allDogs = allDogs.filter((dog) =>
          dog.temperament.includes(temperament)
        );
      }
      if (origin === "apiDogs") {
        allDogs = allDogs.filter((dog) => !dog.createdInBd);
      } else if (origin === "dbDogs") {
        allDogs = allDogs.filter((dog) => dog.createdInBd);
      }
      return {
        ...state,
        allDogs,
      };

    case "CLEAN_FILTERS":
      return {
        ...state,
        allDogs: state.dogs,
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
