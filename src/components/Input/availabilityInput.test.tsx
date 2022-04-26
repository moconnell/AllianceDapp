import { render } from "@testing-library/react";
import { useForm, FormProvider } from "react-hook-form";
import DaysOfWeek from "../../types/daysOfWeek";
import AvailabilityInput from "./availabilityInput";

interface WithFormProviderProps {
  defaultValues?: {
    [x: string]: any;
  };
}

describe("<AvailabilityInput />", () => {
  const WithFormProvider: React.FC<WithFormProviderProps> = ({
    children,
    defaultValues,
  }) => {
    const methods = useForm(defaultValues);

    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  const renderInContext = (
    control: JSX.Element,
    defaultValues?: {
      [x: string]: any;
    }
  ) => {
    return render(
      <WithFormProvider defaultValues={defaultValues}>
        {control}
      </WithFormProvider>
    );
  };

  it("should render correctly", async () => {
    const defaultValues = {
      availableDays: DaysOfWeek.MonFri,
      location: "London",
      timeZone: "Europe/London",
      from: { hours: 9, minutes: 30 },
      to: { hours: 12, minutes: 0 },
    };

    const { asFragment } = renderInContext(
      <AvailabilityInput />,
      defaultValues
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
