import Time from "../types/time";

const locale = Intl.DateTimeFormat().resolvedOptions().locale;
const dateTimeFormat = Intl.DateTimeFormat(locale, {
  dateStyle: "full",
  timeStyle: "short",
});
const shortTimeFormat = Intl.DateTimeFormat(locale, { timeStyle: "short" });

function isTime(value: Time | Date): value is Time {
  return (value as Time).hours !== undefined;
}

const toDate = (t: Time) => {
  let d = new Date();
  d.setHours(t.hours, t.minutes);
  return d;
};

export const formatTime = (value: Time | Date) => {
  return shortTimeFormat.format(isTime(value) ? toDate(value) : value);
};

export const formatDateTime = (value: Date) => {
  try {
    return dateTimeFormat.format(value);
  } catch (error: any) {
    if (error instanceof Error)
      throw Error(`Could not format '${value}': ${error}`);
    else throw Error(`Could not format '${value}'`);
  }
};
