import { render } from "@testing-library/react";
import MeetingCard from "./index";

describe("<MeetingCard />", () => {
  it("should render correctly", async () => {
    const meeting = {
      date: new Date(Date.parse("2022-02-02 20:00.00Z")),
      endDate: new Date(Date.parse("2022-02-02 20:30.00Z")),
      attendee: "Dave Spart",
      description: "Random meeting",
    };
    const { asFragment } = render(<MeetingCard meeting={meeting} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
