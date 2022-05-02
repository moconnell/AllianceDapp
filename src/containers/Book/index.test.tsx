import { render } from "@testing-library/react";
import Book from "./index";

describe("<Book />", () => {
  it("should render correctly", async () => {
    const { asFragment } = render(<Book />);
    expect(asFragment()).toMatchSnapshot();
  });
});
