import { fakeCategories, fakeMovements } from "./fake-data/fake-data";
const initialState = {
  categories: JSON.parse(localStorage.getItem("categories")) || fakeCategories,
  movements: JSON.parse(localStorage.getItem("movements")) || fakeMovements
};
// const initialState = {
//   categories: {},
//   movements: {}
// };

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_MOVEMENT":
      return {
        ...state,
        movements: {
          ...state.movements,
          [action.payload.id]: action.payload
        }
      };

    case "ADD_CATEGORY":
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.id]: action.payload
        }
      };

    default: {
      return state;
    }
  }
}

export default reducer;
