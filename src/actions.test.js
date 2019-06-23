import { addMovement, addCategory } from "./actions";

test("action - addMovement", () => {
  const amount = Math.round(Math.random() * 1000);
  const categoryId = Math.round(Math.random() * 1000);
  const newMovement = addMovement(categoryId, "test description", amount);
  expect(newMovement).toEqual({
    type: "ADD_MOVEMENT",
    payload: {
      id: expect.any(Number),
      categoryId: categoryId,
      description: "test description",
      amount: amount,
      date: expect.any(String)
    }
  });
});

test("action - addCategory", () => {
  const newCategory = addCategory("expense", "food");
  expect(newCategory).toEqual({
    type: "ADD_CATEGORY",
    payload: {
      id: expect.any(Number),
      type: "expense",
      name: "food"
    }
  });
});
