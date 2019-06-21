/** @jsx jsx */
import React from "react";
import { listIncome } from "../data/daylistIncome";
import { jsx } from "@emotion/core";

function Incomes() {
  const styleExpense = {};

  const totalIncomes = [];
  const years = Object.keys(listIncome);
  years.forEach(year =>
    Object.values(listIncome[year]).forEach(month =>
      month.map(day => totalIncomes.push(day))
    )
  );
  return (
    <>
      <h1>Incomes</h1>
      <div>
        {totalIncomes.map(e => (
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

export default Incomes;
