import { Select } from "@chakra-ui/react";
import { useState } from "react";
import Time from "../../types/time";
import { range } from "../../utils/range";
import { fromTotalMins, totalMinutes } from "../../utils/timeUtils";

const format = Intl.DateTimeFormat(
  Intl.DateTimeFormat().resolvedOptions().locale,
  { timeStyle: "short" }
);

const formatTime = (t: Time) => {
  let d = new Date();
  d.setHours(t.hours, t.minutes);
  return format.format(d);
};

interface TimePickerProps {
  name: string;
  prefix?: string;
  timeIntervalMins?: number;
  value?: Time;
  disabledPredicate?: (mins: number) => boolean;
  onChange?: (value: Time) => void;
}

const TimePicker: React.VFC<TimePickerProps> = ({
  name,
  value,
  disabledPredicate = () => false,
  prefix = name.substring(0, 1),
  timeIntervalMins = 30,
  onChange,
}) => {
  const [times] = useState(
    range(0, 23).flatMap((hours) =>
      range(0, 60 / timeIntervalMins - 1).map((i) => {
        return { hours, minutes: i * timeIntervalMins };
      })
    )
  );

  return (
    <Select
      name={name}
      value={value ? totalMinutes(value) : undefined}
      onChange={(e) => {
        if (onChange) onChange(fromTotalMins(Number(e.target.value)));
      }}
    >
      {times.map((t) => {
        const mins = totalMinutes(t);
        return (
          <option
            key={`${prefix}${mins}`}
            value={mins}
            disabled={disabledPredicate(mins)}
          >
            {formatTime(t)}
          </option>
        );
      })}
    </Select>
  );
};

export default TimePicker;
