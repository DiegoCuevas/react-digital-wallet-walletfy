/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { FaMinusSquare } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { navigate } from "@reach/router";

function Footer() {
  function handleExpenses() {
    navigate("/");
  }
  function handleExpenses() {
    navigate("/");
  }
  function handleIncome() {
    navigate("/incomes");
  }
  function handleResult() {
    navigate("/balances");
  }
  const section = {
    display: "flex",
    justifyContent: "space-around",
    background: "#e0e0dc",
    alignContent: "center",
    height: "3em"
  };
  return (
    <>
      <section css={section}>
        <div
          onClick={handleExpenses}
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
