const initialState = {
  expenseCategories: {
    1: {
      id: 1,
      name: "ExpCategory 1"
    },
    2: {
      id: 2,
      name: "ExpCategory 2"
    },
    3: {
      id: 3,
      name: "ExpCategory 3"
    },
    4: {
      id: 4,
      name: "ExpCategory 4"
    },
    5: {
      id: 5,
      name: "ExpCategory 5"
    },
    6: {
      id: 6,
      name: "ExpCategory 6"
    },
    7: {
      id: 7,
      name: "ExpCategory 7"
    }
  },
  incomeCategories: {
    1: {
      id: 1,
      name: "Income Category 1"
    }
  },
  expenses: {
    2019: {
      6: [
        {
          date: new Date("2019/6/10").toString(),
          categoryId: 1,
          amount: 10,
          desc: "Short description"
        }
      ],
      5: [
        {
          date: new Date("2019/5/1").toString(),
          categoryId: 1,
          amount: 25,
          desc: "Short description"
        }
      ]
    }
  },
  incomes: {
    2019: {
      6: [
        {
          date: new Date("2019/6/9").toString(),
          categoryId: 1,
          amount: 500,
          desc: "Short description"
        }
      ],
      5: [
        {
          date: new Date("2019/5/20").toString(),
          categoryId: 1,
          amount: 600,
          desc: "Short description"
        }
      ]
    }
  },
  balances: {
    2019: {
      6: { initial: 575, income: 500, expense: 10, final: 1065 },
      5: { initial: 0, income: 600, expense: 25, final: 575 }
    }
  }
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: {
          ...state.expenses,
          [action.payload.year]: {
            ...state.expenses[action.payload.year],
            [action.payload.month]: [
              ...state.expenses[action.payload.year][action.payload.month],
              action.payload.expense
            ]
          }
        }
      };

    case "ADD_INCOME":
      return {
        ...state,
        incomes: {
          ...state.incomes,
          [action.payload.year]: {
            ...state.incomes[action.payload.year],
            [action.payload.month]: [
              ...state.incomes[action.payload.year][action.payload.month],
              action.payload.income
            ]
          }
        }
      };

    case "ADD_EXPENSE_CATEGORY":
      return {
        ...state,
        expenseCategories: {
          ...state.expenseCategories,
          [action.payload.id]: {
            id: action.payload.id,
            name: action.payload.name
          }
        }
      };

    case "ADD_INCOME_CATEGORY":
      return {
        ...state,
        incomeCategories: {
          ...state.incomeCategories,
          [action.payload.id]: {
            id: action.payload.id,
            name: action.payload.name
          }
        }
      };

    case "ADD_BALANCE":
      return {
        ...state,
        balances: {
          ...state.balances,
          [action.payload.year]: {
            ...state.balances[action.payload.year],
            [action.payload.month]: action.payload.balance
          }
        }
      };

    default: {
      return state;
    }
  }
}

export default reducer;
