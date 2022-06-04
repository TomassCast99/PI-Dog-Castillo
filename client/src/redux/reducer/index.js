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

    case "HANDLER_WEIGHT":
      if (payload === "Todos") {
        return {
          ...state,
          allDogs: [...state.allDogs],
          dogs: [...state.dogs],
        };
      }
      if (payload === "light") {
        return {
          ...state,
          allDogs: [...state.allDogs].sort((a, b) => {
            let pesoA = parseInt(a.weight.split("-")[0]);
            let pesoB = parseInt(b.weight.split("-")[0]);
            if (pesoA > pesoB) return 1;
            if (pesoA < pesoB) return -1;
            else return 0;
          }),
          dogs: [...state.dogs].sort((a, b) => {
            let pesoA = parseInt(a.weight.split("-")[0]);
            let pesoB = parseInt(b.weight.split("-")[0]);
            if (pesoA > pesoB) return 1;
            if (pesoA < pesoB) return -1;
            else return 0;
          }),
        };
      }
      if (payload === "heavy") {
        return {
          allDogs: [...state.allDogs].sort((a, b) => {
            let pesoA = parseInt(a.weight.split("-")[0]);
            let pesoB = parseInt(b.weight.split("-")[0]);

            if (pesoA < pesoB) return 1;
            if (pesoA > pesoB) return -1;
            else return 0;
          }),
          dogs: [...state.dogs].sort((a, b) => {
            let pesoA = parseInt(a.weight.split("-")[0]);
            let pesoB = parseInt(b.weight.split("-")[0]);
            if (pesoA < pesoB) return 1;
            if (pesoA > pesoB) return -1;
            else return 0;
          }),
        };
      }
      break;

    case "CLEAN_FILTERS":
      return {
        ...state,
        allDogs: state.dogs,
      };

    case "HANDLER_NAME":
      let sortAlf;
      if (payload === "asc") {
        sortAlf = state.allDogs.sort((a, b) => {
          if (a.name.charAt(0) > b.name.charAt(0)) {
            return 1;
          }
          if (a.name.charAt(0) < b.name.charAt(0)) {
            return -1;
          }
          return 0;
        });
      } else if (payload === "desc") {
        sortAlf = state.allDogs.sort((a, b) => {
          if (a.name.charAt(0) > b.name.charAt(0)) {
            return -1;
          }
          if (a.name.charAt(0) < b.name.charAt(0)) {
            return 1;
          }
          return 0;
        });
      }
      return {
        ...state,
        dogs: sortAlf,
      };

    case "GET_NAME_DOGS":
      return {
        ...state,
        allDogs: payload,
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
