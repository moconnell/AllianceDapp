import "./styles.css";
import ReactCalendar, {
  OnChangeDateCallback,
  OnChangeDateRangeCallback,
} from "react-calendar";
import { Fragment } from "react";

interface CalendarProps {
  onChange?: OnChangeDateCallback | OnChangeDateRangeCallback;
  defaultValue?: Date | Date[];
  tileDisabled?: (date: Date) => boolean;
}

const Calendar = ({
  onChange,
  defaultValue = new Date(),
  tileDisabled = () => false,
}: CalendarProps) => (
  <ReactCalendar
    onDrillDown={({ activeStartDate, view }) =>
      console.log("Drilled down to: ", activeStartDate, view)
    }
    tileContent={({ date, view }) => (
      <Fragment>{view === "month" && date.getDay() === 0 ? "" : null}</Fragment>
    )}
    onChange={onChange}
    defaultValue={defaultValue}
    tileDisabled={({ date }) => tileDisabled(date)}
  />
);

export default Calendar;
