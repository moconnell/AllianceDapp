import { render } from "@testing-library/react";
import Web3Button from "./index";

describe("<Web3Button />", () => {
  it("should render correctly", async () => {
    const { asFragment } = render(<Web3Button />);
    expect(asFragment()).toMatchSnapshot();
  });
});
