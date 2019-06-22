/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import DayList from "../components/day-list";
import { FaPlusCircle } from "react-icons/fa";
import { navigate } from "@reach/router";

function Expenses({ isExpense }) {
  function handleClick() {
    navigate("/add");
  }

  return (
    <section>
      <Header title="Expenses" />
      <section
        css={{
          marginBottom: "3em",
          overflow: "auto",
          position: "relative"
        }}
      >
        <DayList isExpense={isExpense} />
      </section>
      <section
        css={{
          position: "fixed",
          bottom: "0px",
          right: "0px",
          left: "0px"
        }}
      >
        <Footer />
      </section>
      <button
        onClick={handleClick}
        css={{
          background: "none",
          border: "none",
          fontSize: "60px",
          color: "#cc525c",
          display: "flex",
          position: "fixed",
          bottom: "4rem",
          right: "0.5rem",
          backgroundColor: "#FFF",
          borderRadius: "50%",
          height: "60px",
          width: "60px",
          padding: "0",
          border: "none"
        }}
      >
        <FaPlusCircle />
      </button>
    </section>
  );
}

export default Expenses;
