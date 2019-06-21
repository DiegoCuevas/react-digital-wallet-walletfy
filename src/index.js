import React from "react";
import { render } from "react-dom";
import { Global } from "@emotion/core";
import { Provider } from "react-redux";
import { Router } from "@reach/router";
import Expenses from "./views/expenses";
import Incomes from "./views/incomes";
import Movements from "./views/movements";
import Balances from "./views/balances";

import store from "./store";

function App() {
  return (
    <Router>
      <Expenses path="/" />
      <Expenses path="/expenses" />
      <Incomes path="/incomes" />
      <Movements path="/add" />
      <Balances path="/balances" />
    </Router>
  );
}

const $root = document.getElementById("root");
render(
  <>
    <Global
      styles={{
        body: {
          fontFamily:
            "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'",
          margin: 0,
          height: "100vh",
          backgroundColor: "#fafaf5"
        },
        a: { textDecoration: "inherit", color: "inherit" },
        "h1, h2, h3": { margin: 0 }
      }}
    />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  $root
);
