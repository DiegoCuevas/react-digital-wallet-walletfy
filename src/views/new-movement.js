/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import NewMovementForm from "../components/new-movement-form";

function NewMovement() {
  return (
    <>
      <Header title={"Register"} />
      <NewMovementForm />
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

export default NewMovement;
