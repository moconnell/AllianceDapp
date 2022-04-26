    import { render } from "@testing-library/react";
    import TimePicker from "./timePicker";

    describe("<TimePicker />", () => {
    it("should render correctly", async () => {
        const { asFragment } = render(<TimePicker name="from" />);
        expect(asFragment()).toMatchSnapshot();
    });
    });
