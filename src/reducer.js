const initialState = {
  expenseCategories: {
    1: {
      id: 1,
      name: "Category Expense 1"
    },
    2: {
      id: 2,
      name: "Category Expense 2"
    }
  },
  incomeCategories: {
    1: {
      id: 1,
      name: "Income Expense 1"
    }
  },
  expenses: {
    2019: {
      6: [
        {
          day: 5,
          categoryId: 1,
          amount: 10,
          desc: "Short description"
        }
      ],
      5: [
        {
          day: 15,
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
          day: 1,
          categoryId: 1,
          amount: 500,
          desc: "Short description"
        }
      ],
      5: [
        {
          day: 2,
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

    default: {
      return state;
    }
  }
}

export default reducer;
