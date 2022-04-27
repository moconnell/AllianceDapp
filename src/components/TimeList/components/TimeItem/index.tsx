import { getMeridian } from "../../../../utils/formatDate";
import { TimeButton } from "./styles";

interface TimeItemProps {
  hours: number;
  minutes: number;
  active: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const TimeItem = ({
  hours,
  minutes,
  active,
  onClick,
}: TimeItemProps) => (
  <TimeButton
    onClick={onClick}
    style={{ backgroundColor: active ? "#ff3864" : "transparent" }}
  >
    {getMeridian(hours, minutes)}
  </TimeButton>
);

export default TimeItem;
