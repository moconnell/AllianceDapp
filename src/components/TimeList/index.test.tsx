import { render } from "@testing-library/react";
import TimeList from "./index";
import { MOCK_TIMES } from "../../mock";

describe("<TimeList />", () => {
  it("should render correctly", async () => {
    const { asFragment } = render(<TimeList times={MOCK_TIMES} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
