import { render } from "@testing-library/react";
import Preferences from "./index";
import { createMemoryHistory } from "history";
import { useCalendar } from "../../hooks";
import { useWeb3Context } from "../../context/Web3Context";
import { Router, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import { web3InitialState } from "../../reducers";

const PROFILE_PATH = "/profile";
const ROOT_PATH = "/";
const MOCK_INPUT = "((Input))";
const MOCK_HOME = "((Home))";

jest.mock("react-hook-form", () => {
  return {
    ...jest.requireActual("react-hook-form"),
    useForm: () => {
      return { handleSubmit: jest.fn(), reset: jest.fn() };
    },
  };
});
jest.mock("../../hooks");
jest.mock("../../context/Web3Context");
jest.mock("../../components/Input", () => () => MOCK_INPUT);

describe("<Preferences />", () => {
  const mockSetProfileAvailability = jest.fn();

  afterEach(() => jest.resetAllMocks());
  afterAll(() => jest.restoreAllMocks());

  const testData = [
    {
      name: "render correctly",
      web3ProviderState: { ...web3InitialState, address: "0x0123498712309487" },
      expectedRoute: PROFILE_PATH,
    },
    {
      name: "redirect to home page",
      web3ProviderState: web3InitialState,
      expectedRoute: ROOT_PATH,
    },
  ];

  testData.forEach(({ name, web3ProviderState, expectedRoute }) =>
    it(`should ${name}`, () => {
      (useCalendar as jest.Mock).mockImplementation(() => {
        return {
          availablility: {},
          profile: {},
          setProfileAvailability: mockSetProfileAvailability,
        };
      });
      (useWeb3Context as jest.Mock).mockImplementation(() => {
        return web3ProviderState;
      });

      const history = createMemoryHistory();
      history.push(PROFILE_PATH);

      const { asFragment } = render(
        <Router location={history.location} navigator={history}>
          <Routes>
            <Route path={PROFILE_PATH} element={<Preferences />} />
            <Route
              path={ROOT_PATH}
              element={<Fragment>{MOCK_HOME}</Fragment>}
            />
            <Route element={<Fragment>No route match</Fragment>} />
          </Routes>
        </Router>
      );

      expect(history.location.pathname).toBe(expectedRoute);
      expect(asFragment()).toMatchSnapshot();
    })
  );
});
