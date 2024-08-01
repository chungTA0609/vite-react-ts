import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/jest-globals'
import App from "./App";

test("renders App", () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId("input");
  const dropdown = getByTestId("dropdown");
  const button = getByTestId("button");

  expect(input).toBeInTheDocument();
  expect(dropdown).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("handles input change", () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId("input");

  fireEvent.change(input, { target: { value: "Hello" } });

  expect(input.value).toBe("Hello");
});

test("handles dropdown change", () => {
  const { getByTestId } = render(<App />);
  const dropdown = getByTestId("dropdown");

  fireEvent.change(dropdown, { target: { value: "option1" } });

  expect(dropdown.value).toBe("option1");
});

test("handles button click", () => {
  const { getByTestId } = render(<App />);
  const button = getByTestId("button");

  fireEvent.click(button);

  const result = getByTestId("result");
  expect(result).toBeInTheDocument();
});
