/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { listExpense } from "../data/daylistExpense";

function Expenses() {
  const container = {
    display: "flex"
  };

  const styleExpense = {
    display: "flex",
    border: "1px solid black",
    flexDirection: "column",
    marginBot: 20,
    height: 250,
    width: 120
  };

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
      <div css={container}>
        {totalExpenses.map(e => (
          <div css={styleExpense}>
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
