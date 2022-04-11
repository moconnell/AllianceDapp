import { render } from "@testing-library/react";
import AvailableDays from "./index";

describe("<AvailableDays />", () => {
  it("should render correctly", async () => {
    const { asFragment } = render(<AvailableDays />);
    expect(asFragment()).toMatchSnapshot();
  });
});
