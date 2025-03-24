import React from "react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { render, screen } from "@testing-library/react";

import Text from "./Text";

describe("<Text />", () => {
  it("should render component with default properties", () => {
    render(<Text>Text</Text>);

    const element = screen.getByText("Text");

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyleRule("color", "#000");
    expect(element).toHaveStyleRule("font-size", "16px");
    expect(element).toHaveStyleRule("font-weight", "normal");
  });

  it("should render component with custom color", () => {
    render(<Text color="#fff">Text</Text>);

    expect(screen.getByText("Text")).toHaveStyleRule("color", "#fff");
  });

  it("should render component with bold weight", () => {
    render(<Text weight="bold">Text</Text>);

    expect(screen.getByText("Text")).toHaveStyleRule("font-weight", "bold");
  });

  it("should render component with custom weight", () => {
    render(<Text fontWeight={500}>Text</Text>);

    expect(screen.getByText("Text")).toHaveStyleRule("font-weight", "500");
  });

  it("should render component with custom font size", () => {
    render(<Text fontSize="20px">Text</Text>);

    expect(screen.getByText("Text")).toHaveStyleRule("font-size", "20px");
  });

  it("should render component with custom font family", () => {
    render(<Text fontFamily="TimesNewRoman">Text</Text>);

    expect(screen.getByText("Text")).toHaveStyleRule(
      "font-family",
      "TimesNewRoman",
    );
  });
});
