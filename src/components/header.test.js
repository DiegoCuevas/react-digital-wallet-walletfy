import React from "react";
import { render, getNodeText } from "@testing-library/react";

import Header from "./header";

test("Header", () => {
  const { asFragment } = render(<Header title="Test Title" />);
  expect(asFragment()).toMatchSnapshot();
});

test("Show correct title", () => {
  const { getByLabelText } = render(<Header title="Test Title" />);

  const title = getByLabelText("header-title");
  const textTitle = getNodeText(title);
  expect(textTitle).toBe("Test Title");
});
