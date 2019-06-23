/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import { connect } from "react-redux";

function BalanceTable(props) {
  const reduceByMonthCategory = Object.values(props.movements)
    .filter(
      mov =>
        new Date(mov.date).getFullYear() === props.year &&
        new Date(mov.date).getMonth() === props.month - 1 &&
        props.categories[mov.categoryId].type === props.type
    )
    .reduce((acum, mov) => {
      let categoryName = props.categories[mov.categoryId].name;
      let amount = mov.amount;
      acum[categoryName] = acum[categoryName] + amount || amount;
      return acum;
    }, {});
  const total = Object.values(reduceByMonthCategory).reduce((acc, value) => {
    return acc + value;
  }, 0);
  console.log(total);
  console.log(reduceByMonthCategory["Entertainment"]);
  console.log(typeof reduceByMonthCategory);
  props.setTotal(total);

  Object.keys(reduceByMonthCategory).forEach(function(key) {
    console.log(key, reduceByMonthCategory[key]);
  });

  return (
    <>
      <div
        css={{
          backgroundColor: "lightgrey",
          height: "150px",
          textAlign: "center",
          margin: "0.5em 0"
        }}
      >
        BalanceTable {props.type}
        <section>
          {Object.entries(reduceByMonthCategory).map(([key, value]) => {
            return <> <article>{key} {value}</article></>;
          })}
        </section>
      </div>
     
    </>
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
)(BalanceTable);
