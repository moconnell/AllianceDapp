import { formatTime } from "../../../../utils/formatDate";
import { TimeButton } from "./styles";

interface TimeItemProps {
  value: Date;
  active: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const TimeItem = ({ value, active, onClick }: TimeItemProps) => (
  <TimeButton
    onClick={onClick}
    style={{ backgroundColor: active ? "#ff3864" : "transparent" }}
  >
    {formatTime(value)}
  </TimeButton>
);

export default TimeItem;
