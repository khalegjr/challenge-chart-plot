import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("has a button", () => {
    render(<Footer />);

    const button = screen.getByText(/generate chart/i);
    expect(button).toBeInTheDocument();
  });
});
