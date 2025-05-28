import { render, screen } from "@/test-utils";
import { Welcome } from "./Welcome";

describe("Welcome component", () => {
  it("renders welcome text", () => {
    render(<Welcome />);
    expect(
      screen.getByText(/Embark on my journey through education/i),
    ).toBeInTheDocument();
  });
});
