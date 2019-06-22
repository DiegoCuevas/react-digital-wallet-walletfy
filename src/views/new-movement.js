/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import NewMovementForm from "../components/new-movement-form";

function NewMovement(props) {
  return (
    <>
      <Header title={"New Movement"} />
      <NewMovementForm isExpense={props.isExpense} />
      <section
        css={{
          position: "fixed",
          bottom: "0px",
          width: "100%"
        }}
      >
        <Footer setIsExpense={props.setIsExpense} />
      </section>
    </>
  );
}

export default NewMovement;
