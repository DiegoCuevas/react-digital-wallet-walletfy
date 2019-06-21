/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Header({ title }) {
  return (
    <section
      css={{
        position: "sticky",
        top: "0px",
        zIndex: "1"
      }}
    >
      <div
        css={{
          display: "flex",
          backgroundColor: "#e0e0dc",
          height: "3rem",
          flexDirection: "row",
          justifyContent: "center",
          border: "none",
          borderBottom: "1px solid rgba(0,0,0,.0975)",
          alignItems: "center"
        }}
      >
        <h1>{title}</h1>
      </div>
    </section>
  );
}

export default Header;
