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
    },
    4: {
      id: 4,
      type: "expense",
      name: "education"
    },
    5: {
      id: 5,
      type: "income",
      name: "sales"
    },
    6: {
      id: 6,
      type: "expense",
      name: "viaje"
    }
  },
  movements: {
    1: {
      id: 1,
      categoryId: 1,
      description: "Sueldo de Junio",
      amount: 3000,
      date: "2019-05-21T03:43:01.928Z"
    },
    2: {
      id: 2,
      categoryId: 3,
      description: "Ir al trabajo",
      amount: 9,
      date: "2019-05-21T03:43:01.928Z"
    },
    3: {
      id: 3,
      categoryId: 3,
      description: "Regresar a casa",
      amount: 11,
      date: "2019-05-21T03:43:01.928Z"
    },
    4: {
      id: 4,
      categoryId: 2,
      description: "Chilli's",
      amount: 29,
      date: "2019-05-25T03:43:01.928Z"
    },
    5: {
      id: 5,
      categoryId: 3,
      description: "Ir al concierto",
      amount: 20,
      date: "2019-05-25T03:43:01.928Z"
    },
    6: {
      id: 6,
      categoryId: 4,
      description: "Pagar la universidad",
      amount: 1000,
      date: "2019-06-01T03:43:01.928Z"
    },
    7: {
      id: 7,
      categoryId: 1,
      description: "Gratificación",
      amount: 3500,
      date: "2019-06-01T03:43:01.928Z"
    },
    8: {
      id: 8,
      categoryId: 1,
      description: "Sueldo",
      amount: 3000,
      date: "2019-05-01T03:43:01.928Z"
    },
    9: {
      id: 9,
      categoryId: 5,
      description: "Venta de carro",
      amount: 9000,
      date: "2019-06-17T03:43:01.928Z"
    },
    10: {
      id: 10,
      categoryId: 3,
      description: "Viaje a Copa America",
      amount: 4500,
      date: "2019-06-29T03:43:01.928Z"
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
