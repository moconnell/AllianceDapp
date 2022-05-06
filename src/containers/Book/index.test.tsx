import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { DateTime } from "luxon";
import { Router } from "react-router-dom";
import DaysOfWeek from "../../types/daysOfWeek";
import { range } from "../../utils/range";
import { useCalendar } from "../../hooks";
import Book from "./index";

const SYDNEY = "Australia/Sydney";

jest.mock("../../hooks");

describe("<Book />", () => {
  const mockGetProfileAvailability = jest.fn();
  const mockGetAvailableTimes = jest.fn();

  afterEach(() => jest.resetAllMocks());
  afterAll(() => jest.restoreAllMocks());

  it("should render correctly", async () => {
    (useCalendar as jest.Mock).mockImplementation(() => {
      return {
        getProfileAvailability: mockGetProfileAvailability,
        getAvailableTimes: mockGetAvailableTimes,
      };
    });

    mockGetProfileAvailability.mockImplementation(() => {
      return {
        profile: { username: "mr_bojangles", description: "legend" },
        availability: {
          location: "Sydney",
          timeZone: SYDNEY,
          availableDays: DaysOfWeek.MonFri,
        },
      };
    });

    mockGetAvailableTimes.mockImplementation(() => {
      return range(9, 14).map((hour) =>
        DateTime.fromObject({ hour }).setZone(SYDNEY)
      );
    });

    const history = createMemoryHistory();
    history.push("book/0x23dB4a08f2272df049a4932a4Cc3A6Dc1002B33E");

    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <Book />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
