/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import DayList from "../components/day-list";
import { FaPlusCircle } from "react-icons/fa";
import { navigate } from "@reach/router";

function Movements({ isExpense, setIsExpense }) {
  function handleClick() {
    navigate("/new");
  }

  return (
    <section>
      <Header title="Movements" />
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
          left: "0px",
          maxWidth: "1024px",
          margin: "auto"
        }}
      >
        <Footer setIsExpense={setIsExpense} />
      </section>
      <button
        onClick={handleClick}
        aria-label={isExpense ? "Add expense" : "Add income"}
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
          padding: "0"
        }}
      >
        <FaPlusCircle />
      </button>
    </section>
  );
}

export default Movements;
