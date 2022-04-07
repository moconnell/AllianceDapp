import { getMeridian } from "../../../../utils/formatDate";
// @ts-expect-error ts-migrate(6142) FIXME: Module './styles' was resolved to '/Users/matthewo... Remove this comment to see the full error message
import { TimeButton } from "./styles";

export function TimeItem({
  hours,
  minutes,
  seconds,
  active,
  onClick
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <TimeButton onClick={onClick} active={active}>
      {getMeridian(hours, minutes)}
    </TimeButton>
  );
}
