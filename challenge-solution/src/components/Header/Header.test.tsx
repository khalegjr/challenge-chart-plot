import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  it('renders "Júnior\'s Challenge"', () => {
    render(<Header />);

    const header = screen.getByText(/júnior's challenge/i);

    expect(header).toBeInTheDocument();
  });
});
