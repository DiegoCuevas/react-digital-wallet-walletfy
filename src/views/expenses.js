/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { listExpense } from "../data/daylistExpense";

function Expenses() {
  const totalExpenses = [];
  const years = Object.keys(listExpense);
  years.forEach(year =>
    Object.values(listExpense[year]).forEach(month =>
      month.map(day => totalExpenses.push(day))
    )
  );

  // CSS

  const container = {
    overflow: "auto",
    background: "gray",
    margin: 20
  };

  const styleExpense = {
    display: "flex",
    border: "1px solid black",
    flexDirection: "column",
    padding: 5,
    height: 150,
    width: 150,
    background: "red",
    margin: 10
  };
  return (
    <section>
      <Header title="Expenses" />
      <section
        css={{
          position: "fixed",
          bottom: "0px",
          right: "0px",
          left: "0px"
        }}
      >
        <h1>Expenses</h1>
        <div css={container}>
          {totalExpenses.map(e => (
            <div key={e.id} css={styleExpense}>
              <h2>{e.categoryId}</h2>
              <h3>{e.amount}</h3>
              <h3>{e.description}</h3>
              <h3>{e.date}</h3>
              <br />
            </div>
          ))}
        </div>
        <Footer />
      </section>
    </section>
  );
}

export default Expenses;
