/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { listIncome } from "../data/daylistIncome";

function Incomes() {
  const totalIncomes = [];
  const years = Object.keys(listIncome);
  years.forEach(year =>
    Object.values(listIncome[year]).forEach(month =>
      month.map(day => totalIncomes.push(day))
    )
  );

  // CSS

  const styleIncome = {
    display: "flex",
    border: "1px solid black",
    flexDirection: "column",
    padding: 5,
    height: 150,
    width: 150,
    background: "green",
    margin: 10
  };

  const container = {
    overflow: "auto",
    background: "gray",
    margin: 20
  };

  return (
    <section>
      <Header title="Incomes" />
      <section
        css={{
          position: "fixed",
          bottom: "0px",
          right: "0px",
          left: "0px"
        }}
      >
        <h1>Incomes</h1>
        <div css={container}>
          {totalIncomes.map(e => (
            <div css={styleIncome}>
              <h2>{e.categoryId}</h2>
              <h3>{e.amount}</h3>
              <h3>{e.description}</h3>
              <h3>{e.date}</h3>
              <br />
            </div>
          ))}
        </div>
        <button>+</button>
        <Footer />
      </section>
    </section>
  );
}

export default Incomes;
