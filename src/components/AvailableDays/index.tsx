import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import DayOfWeek from "../../types/dayOfWeek";
import AvailableDaysButton from "./AvailableDaysButton";

const daysOfWeek = [
  DayOfWeek.Monday,
  DayOfWeek.Tuesday,
  DayOfWeek.Wednesday,
  DayOfWeek.Thursday,
  DayOfWeek.Friday,
  DayOfWeek.Saturday,
  DayOfWeek.Sunday,
];
const noDaysAvailable = [false, false, false, false, false, false, false];

interface AvailableDaysProps {
  available?: boolean[];
  onChange?: (available: boolean[]) => void;
}

const AvailableDays: React.VFC<AvailableDaysProps> = ({
  available = noDaysAvailable,
  onChange,
}) => {
  const [availability, setAvailability] = useState(available);

  const handleSelect = (dayOfWeek: DayOfWeek, selected: boolean) => {
    const newAvailability = [...availability];
    newAvailability[dayOfWeek] = selected;
    setAvailability(newAvailability);
    if (onChange) onChange(newAvailability);
  };

  return (
    <Flex direction={{ base: "row" }}>
      {daysOfWeek.map((day) => (
        <AvailableDaysButton
          day={day}
          key={day}
          selected={available[day]}
          onSelect={handleSelect}
        />
      ))}
    </Flex>
  );
};

export default AvailableDays;
