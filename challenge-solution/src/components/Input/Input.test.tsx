import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  it("render the component", () => {
    // This call is to allow testing of a CodeMirror generated element
    const getInput = jest.fn();

    render(<Input getInput={getInput} />);

    const inputArea = screen.getByTestId("data-input");
    expect(inputArea).toBeInTheDocument();
  });
});
