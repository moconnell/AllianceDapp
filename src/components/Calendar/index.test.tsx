import { render } from "@testing-library/react";
import Calendar from "./index";

jest.mock("react-calendar", () => () => "((ReactCalendar))");

describe("<Calendar />", () => {
  it("should render correctly", async () => {
    const { asFragment } = render(<Calendar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
