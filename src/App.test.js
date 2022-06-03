import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  it("should display text", () => {
    const { container } = render(<App>We Salute You!</App>);
    expect(getByTestId(container, "rendered-text")).toHaveTextContent(
      "We Salute You!"
    );
  });
});
