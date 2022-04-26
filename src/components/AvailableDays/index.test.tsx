import { fireEvent, render } from "@testing-library/react";
import DaysOfWeek from "../../types/daysOfWeek";
import AvailableDays from "./index";

describe("<AvailableDays />", () => {
  it("should render correctly", async () => {
    const { asFragment } = render(<AvailableDays value={DaysOfWeek.MonFri} />);
    expect(asFragment()).toMatchSnapshot();
  });

  const testData = [
    {
      defaultValue: DaysOfWeek.Monday,
      clickText: /Tue/i,
      expectedValue: DaysOfWeek.Monday | DaysOfWeek.Tuesday,
    },
    {
      defaultValue: DaysOfWeek.MonFri,
      clickText: /Fri/i,
      expectedValue:
        DaysOfWeek.Monday |
        DaysOfWeek.Tuesday |
        DaysOfWeek.Wednesday |
        DaysOfWeek.Thursday,
    },
  ];

  testData.forEach(({ defaultValue, clickText, expectedValue }) =>
    it("should send value onChange", async () => {
      const mockHandleChange = jest.fn();
      const { getByText } = render(
        <AvailableDays value={defaultValue} onChange={mockHandleChange} />
      );
      fireEvent.click(getByText(clickText));
      expect(mockHandleChange).toHaveBeenCalledWith(expectedValue);
    })
  );
});
