/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import RegisterForm from "../components/register-form";

function Register() {
  return (
    <>
      <Header title={"Register"} />
      <RegisterForm />
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

export default Register;
