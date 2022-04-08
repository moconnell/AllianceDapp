import "./styles.css";
import React, { useState } from "react";
import DayOfWeek from "../../../types/dayOfWeek";

interface AvailableDaysButtonProps {
  day: DayOfWeek;
  selected?: boolean;
  onSelect?: (day: DayOfWeek, selected: boolean) => void;
}

const AvailableDaysButton: React.VFC<AvailableDaysButtonProps> = ({
  day,
  selected = false,
  onSelect: selectedChanged,
}) => {
  const [active, setActive] = useState(selected);

  const handleClick = () => {
    const newActive = !active;
    setActive(newActive);
    if (selectedChanged) selectedChanged(day, newActive);
  };

  return (
    <div className="circle-wrapper" onClick={handleClick}>
      <div className={active ? "name-wrapper-clicked" : "name-wrapper"}>
        <span className={active ? "clicked-dot" : "dot"}></span>
        {DayOfWeek[day].substring(0, 3)}
      </div>
    </div>
  );
};

export default AvailableDaysButton;
