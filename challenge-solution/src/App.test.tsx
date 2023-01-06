import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders components header, footer, input and chart", () => {
  render(<App />);
  const linkElement = screen.getByText(/júnior's challenge/i);
  expect(linkElement).toBeInTheDocument();
});
