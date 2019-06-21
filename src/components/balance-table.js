/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import { connect } from "react-redux";

function BalanceTable(props) {
  return (
    <div
      css={{
        backgroundColor: "lightgrey",
        height: "150px",
        textAlign: "center",
        margin: "0.5em 0"
      }}
    >
      BalanceTable {props.title}
    </div>
  );
}

export default connect(
  null,
  null
)(BalanceTable);
