/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import BalanceDisplay from "../components/balance-display";

function Balances({ setIsExpense }) {
  return (
    <section>
      <Header title="Balances" />
      <section
        css={{
          padding: "0.5em",
          overflow: "auto",
          marginBottom: "3em",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <BalanceDisplay />
      </section>
      <section
        css={{
          position: "fixed",
          bottom: "0px",
          right: "0px",
          left: "0px"
        }}
      >
        <Footer setIsExpense={setIsExpense} />
      </section>
    </section>
  );
}

export default Balances;
