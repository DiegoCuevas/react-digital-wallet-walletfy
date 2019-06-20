import React from "react";

import { listExpense } from "../data/daylistExpense";

function Expenses() {
  const totalExpenses = [];
  const years = Object.keys(listExpense);
  years.forEach(year =>
    Object.values(listExpense[year]).forEach(month =>
      month.map(day => totalExpenses.push(day))
    )
  );
  return (
    <>
      <h1>Expenses</h1>
      <div>
        {totalExpenses.map(e => (
          <div>
            <span>
              <h2>{e.categoryId}</h2>
              <h3>{e.amount}</h3>
            </span>
            <h3>{e.description}</h3>
            <h3>{e.date}</h3>
            <br />
          </div>
        ))}
      </div>
    </>
  );
}

export default Expenses;
