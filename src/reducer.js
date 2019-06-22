import { fakeCategories, fakeMovements } from "./fake-data/fake-data";
const initialState = {
  categories: fakeCategories,
  movements: fakeMovements
};

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
