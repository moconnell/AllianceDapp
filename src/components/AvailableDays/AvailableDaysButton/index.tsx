import "./styles.css";
import React, { useEffect, useState } from "react";
import DaysOfWeek from "../../../types/daysOfWeek";

interface AvailableDaysButtonProps {
  day: DaysOfWeek;
  selected?: boolean;
  onSelect?: (day: DaysOfWeek, selected: boolean) => void;
}

const AvailableDaysButton: React.VFC<AvailableDaysButtonProps> = ({
  day,
  selected = false,
  onSelect: selectedChanged,
}) => {
  const [active, setActive] = useState(selected);

  useEffect(() => {
    setActive(selected);
  }, [selected]);

  const handleClick = () => {
    const newActive = !active;
    setActive(newActive);
    if (selectedChanged) selectedChanged(day, newActive);
  };

  return (
    <div className="circle-wrapper" onClick={handleClick}>
      <div className={active ? "name-wrapper-clicked" : "name-wrapper"}>
        <span className={active ? "clicked-dot" : "dot"}></span>
        {DaysOfWeek[day].substring(0, 3)}
      </div>
    </div>
  );
};

export default AvailableDaysButton;
