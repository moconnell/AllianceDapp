import { getMeridian } from "../../../../utils/formatDate";
import { TimeButton } from "./styles";

export function TimeItem({ hours, minutes, seconds, active, onClick }) {
  return (
    <TimeButton onClick={onClick} active={active}>
      {getMeridian(hours, minutes)}
    </TimeButton>
  );
}
