import { render } from "@testing-library/react";
import { useForm, FormProvider } from "react-hook-form";

interface WithFormProviderProps {
  defaultValues?: {
    [x: string]: any;
  };
}

const WithFormProvider: React.FC<WithFormProviderProps> = ({
  children,
  defaultValues,
}) => {
  const methods = useForm(defaultValues);

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export const renderWithFormProvider = <
  T extends {
    [x: string]: any;
  }
>(
  control: JSX.Element,
  defaultValues?: T
) => {
  return render(
    <WithFormProvider defaultValues={defaultValues}>{control}</WithFormProvider>
  );
};
