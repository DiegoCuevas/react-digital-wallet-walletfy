function addMovement(categoryId, description, amount) {
  return {
    type: "ADD_MOVEMENT",
    payload: {
      id: Date.now(),
      categoryId: categoryId,
      description: description,
      amount: amount,
      date: new Date().toJSON()
    }
  };
}

function addCategory(type, name) {
  return {
    type: "ADD_CATEGORY",
    payload: {
      id: Date.now(),
      type: type,
      name: name
    }
  };
}

export { addMovement, addCategory };
