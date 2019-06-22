import React, { useState } from "react";
import { Router } from "@reach/router";
import Movements from "./views/movements";
import NewMovement from "./views/new-movement";
import Balances from "./views/balances";
import { connect } from "react-redux";

function App(props) {
  localStorage.setItem("categories", JSON.stringify(props.categories));
  localStorage.setItem("movements", JSON.stringify(props.movements));
  const [isExpense, setIsExpense] = useState(false);

  return (
    <Router>
      <Movements path="/" isExpense={isExpense} setIsExpense={setIsExpense} />
      <NewMovement
        path="/new"
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <Balances path="/balances" setIsExpense={setIsExpense} />
    </Router>
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
)(App);
