import { render, screen } from "@testing-library/react";
import App from "./App";

describe("renders components header, footer, input and chart", () => {
  it("check if header component has been rendered", () => {
    render(<App />);

    const linkElement = screen.getByText(/júnior's challenge/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("check if input component has been rendered", () => {
    render(<App />);

    const linkElement = screen.getByLabelText("data-input");
    expect(linkElement).toBeInTheDocument();
  });

  it("check if footer component has been rendered", () => {
    render(<App />);

    const linkElement = screen.getByText(/generate chart/i);
    expect(linkElement).toBeInTheDocument();
  });
});
