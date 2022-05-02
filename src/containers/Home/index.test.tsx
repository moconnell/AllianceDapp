import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { useWeb3Context } from "../../context/Web3Context";
import { useCalendar } from "../../hooks";
import { Calendar } from "../../typechain-types";
import { Fragment } from "react";
import { web3InitialState } from "../../reducers";
import Home from "./index";

jest.mock("../../context/Web3Context");
jest.mock("../../hooks");
jest.mock("../../components/Web3Button", () => () => "((Web3Button))");
jest.mock("../../typechain-types");

describe("<Home />", () => {
  const testData = [
    {
      name: "redirect to meetings page",
      calendar: { } as Calendar,
    },
    {
      name: "redirect to profile page",
      address: "0x12903412938749018",
    },
    {
      name: "render correctly",
    },
  ];

  beforeEach(() => jest.resetAllMocks());
  afterAll(() => jest.restoreAllMocks());

  testData.forEach(({ name, calendar, address }) => {
    it(`should ${name}`, async () => {
      (useCalendar as jest.Mock).mockImplementation(() => {
        return {
          calendar: calendar,
        };
      });

      (useWeb3Context as jest.Mock).mockImplementation(() => {
        return { ...web3InitialState, address };
      });

      const { asFragment } = render(
        <MemoryRouter>
          <Routes>
            <Route
              path="/meetings"
              element={<Fragment>Meetings page</Fragment>}
            />
            <Route
              path="/profile"
              element={<Fragment>Profile page</Fragment>}
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </MemoryRouter>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});

jest.clearAllMocks();
