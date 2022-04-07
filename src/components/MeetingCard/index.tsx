import { getMeridian } from "../../utils/formatDate";
import { dayNameByNumber } from "./constants";
import {
  DateText,
  CardContainer,
  MeetingDescription,
  Attendee,
// @ts-expect-error ts-migrate(6142) FIXME: Module './styles' was resolved to '/Users/matthewo... Remove this comment to see the full error message
} from "./styles";

export function MeetingCard({
  meeting: { date, endDate, attendee, description }
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <CardContainer>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DateText>{`${dayNameByNumber[date.getDay()]} ${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()} ${getMeridian(
        date.getHours(),
        date.getMinutes()
      )}-${getMeridian(endDate.getHours(), endDate.getMinutes())}`}</DateText>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Attendee>{attendee}</Attendee>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <MeetingDescription>{description}</MeetingDescription>
    </CardContainer>
  );
}
