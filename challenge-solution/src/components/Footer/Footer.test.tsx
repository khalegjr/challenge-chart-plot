import { screen } from "@testing-library/react";

describe("Footer Component", () => {
  it("has a button", () => {
    // render(<Footer />);

    const button = screen.getByText(/generate chart/i);
    expect(button).toBeInTheDocument();
  });
});
