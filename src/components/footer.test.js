import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Footer from "./footer";

const setIsExpense = jest.fn();

test("Footer render", () => {
  const { asFragment } = render(<Footer setIsExpense={setIsExpense} />);
  expect(asFragment()).toMatchSnapshot();
});

test("Footer - Click on Expenses button", () => {
  const { getByLabelText } = render(<Footer setIsExpense={setIsExpense} />);
  const button = getByLabelText("Go to expenses");

  fireEvent.click(button);
  expect(setIsExpense).toHaveBeenCalledWith(true);
});

test("Footer - Click on Incomes button", () => {
  const { getByLabelText } = render(<Footer setIsExpense={setIsExpense} />);
  const button = getByLabelText("Go to incomes");

  fireEvent.click(button);
  expect(setIsExpense).toHaveBeenCalledWith(false);
});
