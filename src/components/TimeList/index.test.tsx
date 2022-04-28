import { fireEvent, render } from "@testing-library/react";
import TimeList from "./index";
import { MOCK_TIMES } from "../../mock";

describe("<TimeList />", () => {
  const testData = [
    {},
    { selectedTime: MOCK_TIMES[0] },
    { selectedTime: MOCK_TIMES[0], duration: 30 },
  ];

  testData.forEach(({ selectedTime, duration }) =>
    it("should render correctly", async () => {
      const { asFragment } = render(
        <TimeList
          times={MOCK_TIMES}
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
      <TimeList times={MOCK_TIMES} onChange={mockHandler} />
    );

    fireEvent.click(getByText("10:30 AM"));

    expect(mockHandler).toBeCalledWith({ hours: 10, minutes: 30 });
  });

  it("should ignore click when no onChange handler", async () => {
    const { getByText } = render(<TimeList times={MOCK_TIMES} />);

    fireEvent.click(getByText("10:30 AM"));
  });
});
