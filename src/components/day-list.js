/* eslint-disable no-extend-native */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { connect } from "react-redux";
import Day from "../components/day";

function DayList(props) {
  Array.prototype.unique = function() {
    return this.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
  };

  function compareDates(a, b) {
    return new Date(b) - new Date(a);
  }

  return (
    <>
      {Object.values(props.movements)
        .filter(
          mov =>
            props.categories[mov.categoryId].type ===
            (props.isExpense ? "expense" : "income")
        )
        .map(movement => new Date(movement.date).toDateString())
        .unique()
        .sort(compareDates)
        .map(date => {
          return <Day key={date} date={date} isExpense={props.isExpense} />;
        })}
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
)(DayList);
