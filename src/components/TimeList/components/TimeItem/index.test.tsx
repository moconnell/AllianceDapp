import { render } from "@testing-library/react";
import TimeItem from "./index";

describe("<TimeItem />", () => {
  const testData = [true, false];
  testData.forEach((active) =>
    it(`should render correctly when active=${active}`, async () => {
      const { asFragment } = render(
        <TimeItem active={active} value={{ hours: 9, minutes: 45 }} />
      );
      expect(asFragment()).toMatchSnapshot();
    })
  );
});
