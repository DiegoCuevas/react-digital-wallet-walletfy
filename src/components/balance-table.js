/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { connect } from "react-redux";

function BalanceTable(props) {
  function isSameMonth(mov) {
    return (
      new Date(mov.date).getFullYear() === props.year &&
      new Date(mov.date).getMonth() === props.month - 1
    );
  }

  function isSameCategoryType(mov) {
    return props.categories[mov.categoryId].type === props.type;
  }

  const reduceByMonthCategory = Object.values(props.movements)
    .filter(mov => isSameMonth(mov) && isSameCategoryType(mov))
    .reduce((acum, mov) => {
      let categoryName = props.categories[mov.categoryId].name;
      let amount = mov.amount;
      acum[categoryName] = acum[categoryName] + amount || amount;
      return acum;
    }, {});

  function sortByAmount(a, b) {
    return b[1] - a[1];
  }
  const orderList = Object.entries(reduceByMonthCategory).sort(sortByAmount);

  console.log(orderList);

  const total = orderList.reduce((acc, value) => {
    return acc + value[1];
  }, 0);

  props.setTotal(total);

  return (
    <>
      <section
        css={{
          margin: "0.15em 0.75em",
          fontSize: "1.25em"
        }}
      >
        <div
          css={{
            backgroundColor: props.type === "expense" ? "#f4a0a8" : "#87caa657",
            display: "flex",
            padding: "0.25em 0.25em",
            justifyContent: "space-between"
          }}
        >
          <span>Total {props.type}</span>
          <span>S/ {total}</span>
        </div>
        <div
          css={{
            backgroundColor:
              props.type === "expense" ? "#f4a0a86e" : "#87caa62b",
            fontSize: "1rem",
            padding: "0.25rem",
            display: "flex",
            flexDirection: "column"
          }}
        >
          {orderList.map(([category, amount]) => (
            <div
              key={category}
              css={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0.1em 0"
              }}
            >
              <span>{category}</span>
              <span>S/ {amount}</span>
            </div>
          ))}
        </div>
      </section>
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
