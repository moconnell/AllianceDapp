import { fireEvent, render } from "@testing-library/react";
import { DateTime } from "luxon";
import { range } from "../../utils/range";
import TimeList from "./index";

describe("<TimeList />", () => {
  const mockTimes = range(9, 14).flatMap((hour) =>
    range(0, 1).map((i) =>
      DateTime.fromObject({ hour, minute: i * 30 }).setLocale("en-us")
    )
  );

  const testData = [
    {},
    { selectedTime: mockTimes[0] },
    { selectedTime: mockTimes[0], duration: 30 },
  ];

  testData.forEach(({ selectedTime, duration }) =>
    it("should render correctly", async () => {
      const { asFragment } = render(
        <TimeList
          times={mockTimes}
          selectedTime={selectedTime}
          duration={duration}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    })
  );

  it("should pass value on change", async () => {
    const mockHandler = jest.fn();

    const { getByText } = render(
      <TimeList times={mockTimes} onChange={mockHandler} />
    );

    fireEvent.click(getByText("10:30 AM"));

    expect(mockHandler).toBeCalledWith(
      DateTime.fromObject({ hour: 10, minute: 30 }).setLocale("en-us")
    );
  });

  it("should ignore click when no onChange handler", async () => {
    const { getByText } = render(<TimeList times={mockTimes} />);

    fireEvent.click(getByText("10:30 AM"));
  });
});
