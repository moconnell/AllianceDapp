import { renderWithFormProvider } from "../../testUtils";
import AvailabilityInfo from "../../types/availabilityInfo";
import AvailabilityInput from "./availabilityInput";

jest.mock("../AvailableDays", () => () => "((AvailableDays))");

describe("<AvailabilityInput />", () => {
  it("should render correctly", async () => {
    const defaultValues = {
      location: "London",
      timeZone: "Europe/London",
      from: { hours: 9, minutes: 30 },
      to: { hours: 12, minutes: 0 },
    } as AvailabilityInfo;

    const { asFragment } = renderWithFormProvider(
      <AvailabilityInput />,
      defaultValues
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
