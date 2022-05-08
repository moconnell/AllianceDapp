import { render, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { DateTime } from "luxon";
import { Route, Router, Routes } from "react-router-dom";
import DaysOfWeek from "../../types/daysOfWeek";
import { range } from "../../utils/range";
import { useCalendar } from "../../hooks";
import AvailabilityInfo from "../../types/availabilityInfo";
import ProfileInfo from "../../types/profileInfo";
import Book from "./index";

jest.mock("../../hooks");
jest.mock("../../components/Calendar", () => () => "((Calendar))");
jest.mock("../../components/Modal", () => () => "((ModalComponent))");
jest.mock(
  "../../components/Modal/components/LoadingTransaction",
  () => () => "((LoadingTransaction))"
);
jest.mock("../../components/TimeList", () => () => "((TimeList))");

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
      const timeZone = "Europe/London";
      const location = timeZone.split("/")[1];
      const profileAvailability: [ProfileInfo, AvailabilityInfo] = [
        { username: "mr_bojangles", description: "legend" },
        {
          location,
          timeZone,
          availableDays: DaysOfWeek.MonFri,
        },
      ];

      return Promise.resolve(profileAvailability);
    });

    mockGetAvailableTimes.mockResolvedValue(
      range(9, 14).map((hour) => DateTime.fromObject({ hour }))
    );

    const history = createMemoryHistory();
    history.push("/book/0x23dB4a08f2272df049a4932a4Cc3A6Dc1002B33E");

    const { asFragment, getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Routes>
          <Route path="/book/:calendarAddress" element={<Book />} />
        </Routes>
      </Router>
    );

    await waitFor(() =>
      expect(getByTestId("container:profile")).toBeInTheDocument()
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
