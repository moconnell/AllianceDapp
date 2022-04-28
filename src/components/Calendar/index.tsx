import "./styles.css";
import ReactCalendar, {
  OnChangeDateCallback,
  OnChangeDateRangeCallback,
} from "react-calendar";
import { Fragment } from "react";

interface CalendarProps {
  onChange?: OnChangeDateCallback | OnChangeDateRangeCallback;
  defaultValue?: Date | Date[];
}

const Calendar = ({ onChange, defaultValue }: CalendarProps) => (
  <ReactCalendar
    onDrillDown={({ activeStartDate, view }) =>
      console.log("Drilled down to: ", activeStartDate, view)
    }
    tileContent={({ date, view }) => (
      <Fragment>{view === "month" && date.getDay() === 0 ? "" : null}</Fragment>
    )}
    onChange={onChange}
    defaultValue={defaultValue}
  />
);

export default Calendar;
