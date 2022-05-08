import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Meetings from "./index";
import { useCalendar } from "../../hooks";

jest.mock("../../hooks");
jest.mock( "../../components/Calendar", () => () => "((Calendar))");

describe("<Meetings />", () => {
  const mockGetMeetings = jest.fn();

  beforeEach(() => mockGetMeetings.mockReset());
  afterAll(() => mockGetMeetings.mockRestore());
  
  it("should render correctly", async () => {
    (useCalendar as jest.Mock).mockImplementation(() => {
      return {
        calendar: {},
        getMeetings: mockGetMeetings,
      };
    });

    const { asFragment } = render(
      <MemoryRouter>
        <Meetings />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

jest.clearAllMocks();
