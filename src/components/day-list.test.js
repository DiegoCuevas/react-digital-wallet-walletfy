import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";

import DayList from "./day-list";

test("DayList render as expenses", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <DayList isExpense={true} />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("DayList render as incomes", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <DayList isExpense={false} />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
