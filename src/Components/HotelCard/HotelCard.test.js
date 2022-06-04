import { render, getByTestId, screen } from "@testing-library/react";
import HotelCard from ".";

describe("hotel card", () => {
  it("should display text", () => {
    const { container } = render(<HotelCard>sort by name</HotelCard>);
    expect(getByTestId(container, "button")).toHaveTextContent("sort by name");
  });

  it("to be in the document", async () => {
    render(<HotelCard />);
    const button = await screen.findByText("sort by price");
    expect(button).toBeInTheDocument();
  });
});
