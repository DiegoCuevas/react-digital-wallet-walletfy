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
      <NewMovementForm
        isExpense={props.isExpense}
        setIsExpense={props.setIsExpense}
      />
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
        <Footer setIsExpense={props.setIsExpense} />
      </section>
    </>
  );
}

export default NewMovement;
