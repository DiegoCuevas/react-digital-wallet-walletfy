function addExpense(categoryId, amount, desc) {
  const payload = {
    year: 2019,
    month: 6,
    expense: {
      date: new Date().toString(),
      categoryId: +categoryId,
      amount: +amount,
      desc: desc
    }
  };
  return { type: "ADD_EXPENSE", payload };
}

function addIncome(categoryId, amount, desc) {
  const payload = {
    year: 2019,
    month: 6,
    income: {
      date: new Date().toString()(),
      categoryId: +categoryId,
      amount: +amount,
      desc: desc
    }
  };
  return { type: "ADD_INCOME", payload };
}

function addExpenseCategory(name) {
  const payload = {
    id: Date.now(),
    name: name
  };
  return { type: "ADD_EXPENSE_CATEGORY", payload };
}

function addIncomeCategory(name) {
  const payload = {
    id: Date.now(),
    name: name
  };
  return { type: "ADD_INCOME_CATEGORY", payload };
}

function addBalance(year, month, initial, income, expense, final) {
  const payload = {
    year: year,
    month: month,
    balance: {
      initial: initial,
      income: income,
      expense: expense,
      final: final
    }
  };
  return { type: "ADD_BALANCE", payload };
}

export {
  addExpense,
  addIncome,
  addExpenseCategory,
  addIncomeCategory,
  addBalance
};
