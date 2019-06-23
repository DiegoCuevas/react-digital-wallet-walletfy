import reducer from "./reducer";
import { fakeCategories, fakeMovements } from "./fake-data/fake-data";

test("reducer - no initial state", () => {
  const finalState = reducer(undefined, {
    type: "ADD_CATEGORY",
    payload: {
      id: 10,
      type: "expense",
      name: "test"
    }
  });
  expect(finalState).toEqual({
    categories: {
      ...fakeCategories,
      10: {
        id: 10,
        type: "expense",
        name: "test"
      }
    },
    movements: { ...fakeMovements }
  });
});

test("reducer - default", () => {
  const initialState = {
    categories: fakeCategories,
    movements: fakeMovements
  };
  const finalState = reducer(initialState, { type: "random" });
  expect(finalState).toEqual(initialState);
});

test("reducer - ADD_CATEGORY", () => {
  const initialState = {
    categories: {
      1: {
        id: 1,
        type: "expense",
        name: "food"
      }
    },
    movements: {}
  };

  const action = {
    type: "ADD_CATEGORY",
    payload: {
      id: 2,
      type: "income",
      name: "salary"
    }
  };

  const finalState = reducer(initialState, action);
  expect(finalState).toEqual({
    categories: {
      1: {
        id: 1,
        type: "expense",
        name: "food"
      },
      2: {
        id: 2,
        type: "income",
        name: "salary"
      }
    },
    movements: {}
  });
});

test("reducer - ADD_MOVEMENT", () => {
  const initialState = {
    categories: {
      1: {
        id: 1,
        type: "expense",
        name: "food"
      }
    },
    movements: {}
  };

  const action = {
    type: "ADD_MOVEMENT",
    payload: {
      id: 1,
      categoryId: 1,
      description: "Some description",
      amount: 5000,
      date: "2019-03-30T05:01:00.000Z"
    }
  };

  const finalState = reducer(initialState, action);
  expect(finalState).toEqual({
    categories: {
      1: {
        id: 1,
        type: "expense",
        name: "food"
      }
    },
    movements: {
      1: {
        id: 1,
        categoryId: 1,
        description: "Some description",
        amount: 5000,
        date: "2019-03-30T05:01:00.000Z"
      }
    }
  });
});
