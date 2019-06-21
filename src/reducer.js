const initialState = {
  categories: {
    1: {
      id: 1,
      type: "income",
      name: "sueldo"
    },
    2: {
      id: 2,
      type: "expense",
      name: "food"
    },
    3: {
      id: 3,
      type: "expense",
      name: "uber"
    }
  },
  movements: {
    1: {
      id: 1,
      categoryId: 1,
      description: "Sueldo de Junio",
      amount: 3000,
      date: "2019-06-21T03:43:01.928Z"
    },
    2: {
      id: 2,
      categoryId: 3,
      description: "Ir al trabajo",
      amount: 9,
      date: "2019-07-21T03:43:01.928Z"
    }
  }
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
