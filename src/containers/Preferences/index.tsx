import { Navigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../../components/Input";
import { useWeb3Context } from "../../context/Web3Context";
import { useCalendar } from "../../hooks";
import DaysOfWeek from "../../types/daysOfWeek";
import Time from "../../types/time";
import ProfileInfo from "../../types/profileInfo";
import AvailabilityInfo from "../../types/availabilityInfo";
import { useEffect, useMemo } from "react";

const Preferences = () => {
  const { availability, profile, setProfileAvailability } = useCalendar();
  const { address } = useWeb3Context();

  const defaultValues = useMemo(() => {
    const defaultValues = { ...profile, ...availability };
    if (!defaultValues.availableDays)
      defaultValues.availableDays = DaysOfWeek.MonFri;
    if (!defaultValues.from) defaultValues.from = { hours: 9 } as Time;
    if (!defaultValues.to) defaultValues.to = { hours: 14 } as Time;
    if (!defaultValues.timeZone)
      defaultValues.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!defaultValues.location)
      defaultValues.location = defaultValues.timeZone.split("/")[1];
    console.log(defaultValues);
    return defaultValues;
  }, [availability, profile]);

  const methods = useForm({
    defaultValues,
    mode: "onChange",
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  if (!address) return <Navigate to="/" />;

  const onValid = (info: ProfileInfo & AvailabilityInfo) => {
    setProfileAvailability(info);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onValid)}>
        <Input />
      </form>
    </FormProvider>
  );
};

export default Preferences;
