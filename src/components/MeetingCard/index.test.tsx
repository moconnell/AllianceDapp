import { render } from "@testing-library/react";
import MeetingCard from "./index";

describe("<MeetingCard />", () => {
  it("should render correctly", async () => {
    const meeting = {
      date: new Date(Date.parse("2022-02-02 20:00")),
      endDate: new Date(Date.parse("2022-02-02 20:30")),
      attendee: "Dave Spart",
      description: "Random meeting",
    };
    const { asFragment } = render(<MeetingCard meeting={meeting} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
