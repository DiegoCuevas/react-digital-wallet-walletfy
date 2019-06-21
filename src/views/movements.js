/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import MovementForm from "../components/movement-form";

function Movements() {
  return (
    <>
      <Header title={"Register"} />
      <MovementForm />
      <section
        css={{
          position: "fixed",
          bottom: "0px",
          width: "100%"
        }}
      >
        <Footer />
      </section>
    </>
  );
}

export default Movements;
