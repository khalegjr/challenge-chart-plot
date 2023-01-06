import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  it("render the component", () => {
    render(<Input />);

    const inputArea = screen.getByLabelText("data-input");
    expect(inputArea).toBeInTheDocument();
  });
});
