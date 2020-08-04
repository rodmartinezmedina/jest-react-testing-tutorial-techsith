import React from "react";
import ReactDOM from "react-dom";
import Button from "./../button";

import { render, cleanup, createRenderer } from "@testing-library/react";
// import "jest-dom/extend-expect"; => not needed in new create-react-app version 07/2020

import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="click me please"></Button>);
  expect(getByTestId("button")).toHaveTextContent("click me please");
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="save" />);
  expect(getByTestId("button")).toHaveTextContent("save");
});

it("matches snapshot 1", () => {
  const tree = renderer.create(<Button label="save"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshot 2", () => {
  const tree = renderer
    .create(<Button label="clieck me please"></Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
