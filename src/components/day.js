/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { connect } from "react-redux";

function Day(props) {
  const day = new Date(props.date).getDate();
  const month = new Date(props.date).getMonth();
  const year = new Date(props.date).getFullYear();
  const isExpense = props.isExpense || false;

  return (
    <div css={{ margin: "0.5em", boxShadow: "0 3px 6px #e0e0dc" }}>
      <div
        css={{
          backgroundColor: isExpense ? "#f4a0a8" : "#87caa657",
          padding: "0.25em"
        }}
      >
        <span>{new Date(props.date).toDateString()}</span>
      </div>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: isExpense ? "#f4a0a86e" : "#87caa62b"
        }}
      >
        {Object.values(props.movements)
          .filter(
            mov =>
              new Date(mov.date).getFullYear() === year &&
              new Date(mov.date).getMonth() === month &&
              new Date(mov.date).getDate() === day &&
              props.categories[mov.categoryId].type ===
                (isExpense ? "expense" : "income")
          )
          .map(mov => (
            <div
              key={mov.id}
              css={{
                display: "flex",
                justifyContent: "space-between",
                padding: "5px",
                borderTop: "#fafaf5 2px solid"
              }}
            >
              <div
                css={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <span>{props.categories[mov.categoryId].name}</span>
                <span
                  css={{
                    fontSize: "0.8em",
                    fontWeight: 100,
                    paddingLeft: "7px",
                    marginTop: "0.25rem"
                  }}
                >
                  {mov.description}
                </span>
              </div>
              <div
                css={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 500,
                  fontSize: "1.1em",
                  marginRight: "10px"
                }}
              >
                S/ {mov.amount}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

function mapState(state) {
  return {
    movements: state.movements,
    categories: state.categories
  };
}

export default connect(
  mapState,
  null
)(Day);
