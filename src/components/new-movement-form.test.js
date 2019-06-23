import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";

import NewMovementForm from "./new-movement-form";

test("NewMovementForm render as new expense", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <NewMovementForm isExpense={true} />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("NewMovementForm render as new income", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <NewMovementForm isExpense={false} />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("Click to change Category", () => {
  const { asFragment, getByLabelText } = render(
    <Provider store={store}>
      <NewMovementForm isExpense={true} />
    </Provider>
  );
  const categoryBox = getByLabelText("Food");
  fireEvent.click(categoryBox);
  expect(asFragment()).toMatchSnapshot();
});
