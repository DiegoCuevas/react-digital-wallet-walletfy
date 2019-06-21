function addExpense(categoryId, amount, desc) {
  const payload = {
    year: 2019,
    month: 6,
    expense: {
      categoryId: +categoryId,
      amount: +amount,
      desc: desc
    }
  };
  return { type: "ADD_EXPENSE", payload };
}

export { addExpense };
