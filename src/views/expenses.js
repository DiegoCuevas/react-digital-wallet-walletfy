/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

function Expenses() {
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
        <Footer />
      </section>
    </section>
  );
}

export default Expenses;
