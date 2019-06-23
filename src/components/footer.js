/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { FaMinusSquare } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { navigate } from "@reach/router";

function Footer({ setIsExpense }) {
  function handleExpenses() {
    setIsExpense(true);
    navigate("/");
  }
  function handleIncome() {
    setIsExpense(false);
    navigate("/");
  }
  function handleResult() {
    navigate("/balances");
  }
  return (
    <>
      <section
        css={{
          display: "flex",
          justifyContent: "space-around",
          background: "#e0e0dc",
          alignContent: "center",
          height: "3em"
        }}
      >
        <div
          onClick={handleExpenses}
          aria-label="Go to expenses"
          css={{
            fontSize: "40px",
            color: "#b23655",
            display: "flex",
            alignItems: "center",
            cursor: "pointer"
          }}
        >
          <FaMinusSquare />
        </div>
        <div
          onClick={handleIncome}
          aria-label="Go to incomes"
          css={{
            fontSize: "40px",
            color: "#36b35f",
            display: "flex",
            alignItems: "center"
          }}
        >
          <FaPlusSquare />
        </div>
        <div
          onClick={handleResult}
          aria-label="Go to balance"
          css={{
            fontSize: "40px",
            color: "blue",
            display: "flex",
            alignItems: "center"
          }}
        >
          <FaBalanceScale />
        </div>
      </section>
    </>
  );
}
export default Footer;
