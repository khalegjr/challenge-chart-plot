import { screen } from "@testing-library/react";

describe("Chart Component", () => {
  it('renders "Chart Area"', () => {
    const chart = screen.getByTestId("chart-testid");
    expect(chart).toBeInTheDocument();
  });
});
