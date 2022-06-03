import { render, getByTestId, screen } from "@testing-library/react";
import HotelCard from ".";

describe("hotel card", () => {
  it("should display text", () => {
    const { container } = render(<HotelCard>sort by name</HotelCard>);
    expect(getByTestId(container, "button")).toHaveTextContent("sort by name");
  });

  it("to be in the document", async () => {
    // Render App
    render(<HotelCard />);
    // Asynchronously extract header with new text
    const button = await screen.findByText("kk");
    // Assert header to have text 'Goodbye!'
    expect(button).toBeInTheDocument();
  });
});
