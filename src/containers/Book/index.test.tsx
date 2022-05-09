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
  const mockBookMeeting = jest.fn();
  const mockGetProfileAvailability = jest.fn();
  const mockGetAvailableTimes = jest.fn();

  afterEach(() => jest.resetAllMocks());
  afterAll(() => jest.restoreAllMocks());

  const testData: [
    string,
    string,
    string?,
    string?,
    [ProfileInfo, AvailabilityInfo]?,
    DateTime[]?
  ][] = [
    [
      "render correctly",
      "container:profile",
      "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      "0x23dB4a08f2272df049a4932a4Cc3A6Dc1002B33E",
      [
        { username: "mr_bojangles", description: "legend" },
        {
          location: "The Big Smoke",
          timeZone: "Europe/London",
          availableDays: DaysOfWeek.MonFri,
        },
      ],
      range(9, 14).map((hour) => DateTime.fromObject({ hour })),
    ],
    ["render invalid url error", "container:invalid-url"],
    [
      "render invalid calendar error",
      "container:invalid-calendar",
      "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    ],
  ];

  testData.forEach(
    ([
      name,
      testId,
      address,
      calendarAddress,
      profileAvailability,
      availableTimes,
    ]) =>
      it(`should ${name}`, async () => {
        (useCalendar as jest.Mock).mockImplementation(() => {
          return {
            address,
            bookMeeting: mockBookMeeting,
            getProfileAvailability: mockGetProfileAvailability,
            getAvailableTimes: mockGetAvailableTimes,
          };
        });

        mockGetProfileAvailability.mockResolvedValue(profileAvailability);
        mockGetAvailableTimes.mockResolvedValue(availableTimes);

        const history = createMemoryHistory();
        history.push(calendarAddress ? `/book/${calendarAddress}` : "/book");

        const { asFragment, getByTestId } = render(
          <Router location={history.location} navigator={history}>
            <Routes>
              <Route path="/book" element={<Book />}>
                <Route path="/book/:calendarAddress" element={<Book />} />
              </Route>
            </Routes>
          </Router>
        );

        await waitFor(() => expect(getByTestId(testId)).toBeInTheDocument());

        expect(asFragment()).toMatchSnapshot();
      })
  );

  // it("should book meeting", async () => {
  //   (useCalendar as jest.Mock).mockImplementation(() => {
  //     return {
  //       bookMeeting: mockBookMeeting,
  //       getProfileAvailability: mockGetProfileAvailability,
  //       getAvailableTimes: mockGetAvailableTimes,
  //     };
  //   });

  //   mockGetProfileAvailability.mockImplementation(() => {
  //     const timeZone = "Europe/London";
  //     const location = timeZone.split("/")[1];
  //     const profileAvailability: [ProfileInfo, AvailabilityInfo] = [
  //       { username: "mr_bojangles", description: "legend" },
  //       {
  //         location,
  //         timeZone,
  //         availableDays: DaysOfWeek.MonFri,
  //       },
  //     ];

  //     return Promise.resolve(profileAvailability);
  //   });

  //   mockGetAvailableTimes.mockResolvedValue(
  //     range(9, 14).map((hour) => DateTime.fromObject({ hour }))
  //   );

  //   const history = createMemoryHistory();
  //   history.push("/book/0x23dB4a08f2272df049a4932a4Cc3A6Dc1002B33E");

  //   const { getByTestId } = render(
  //     <Router location={history.location} navigator={history}>
  //       <Routes>
  //         <Route path="/book/:calendarAddress" element={<Book />} />
  //       </Routes>
  //     </Router>
  //   );

  //   await waitFor(() =>
  //     expect(getByTestId("container:profile")).toBeInTheDocument()
  //   );
  // });
});
