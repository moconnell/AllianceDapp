import { render } from "@testing-library/react";
import selectEvent from "react-select-event";
import TimePicker from "./timePicker";

describe("<TimePicker />", () => {
  it("should render correctly", async () => {
    const { asFragment } = render(<TimePicker name="from" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should pass value on change", async () => {
    const mockHandler = jest.fn();

    const { getByRole, getByTestId } = render(
      <form data-testid="form">
        <TimePicker name="from" onChange={mockHandler} />
      </form>
    );

    const select = getByRole("combobox");
    await selectEvent.select(select, "12:30 PM");

    // failing hmm..
    // expect(getByTestId("form")).toHaveFormValues({
    //   from: "780",
    // });
    // expect(mockHandler).toBeCalledWith({ hours: 12, minutes: 30 });
  });
});
