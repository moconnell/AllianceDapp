// @ts-expect-error ts-migrate(6142) FIXME: Module '../MeetingCard' was resolved to '/Users/ma... Remove this comment to see the full error message
import { MeetingCard } from "../MeetingCard";
// @ts-expect-error ts-migrate(6142) FIXME: Module './styles' was resolved to '/Users/matthewo... Remove this comment to see the full error message
import { MeetingCardContainer } from "./styles";
export function MeetingCardList({
  meetings
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <MeetingCardContainer>
      {meetings.map((meeting: any, index: any) => (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MeetingCard key={index + "key"} meeting={meeting} />
      ))}
    </MeetingCardContainer>
  );
}
