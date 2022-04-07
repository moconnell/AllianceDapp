import "./styles.css";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import ReactCalendar from "react-calendar";

export function Calendar({
  onChange,
  defaultValue
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ReactCalendar
      onDrillDown={({
        activeStartDate,
        view
      }: any) =>
        console.log("Drilled down to: ", activeStartDate, view)
      }
      tileContent={({
        date,
        view
      }: any) =>
        view === "month" && date.getDay() === 0 ? "" : null
      }
      onChange={onChange}
      defaultValue={defaultValue}
    />
  );
}
