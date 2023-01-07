import { render, screen } from "@testing-library/react";
import Chart from "./Chart";

describe("Chart Component", () => {
  it('renders "Chart Area"', () => {
    render(<Chart />);

    const chart = screen.getByText(/chart area/i);
    expect(chart).toBeInTheDocument();
  });
});
