import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";

import Day from "./day";

const date = "2019-04-01T05:01:00.000Z";

test("Day render as expense", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Day date={date} isExpense={true} />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("Day render as income", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Day date={date} isExpense={false} />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
