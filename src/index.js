import React from "react";
import { render } from "react-dom";
import { Global } from "@emotion/core";
import { Provider } from "react-redux";
import App from "./app";

import store from "./store";
import { register } from "./service-worker";

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
          maxWidth: "1024px",
          margin: "auto",
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

register();
