import { MeetingCard } from "../MeetingCard";
import { MeetingCardContainer } from "./styles";
export function MeetingCardList({ meetings }) {
  return (
    <MeetingCardContainer>
      {meetings.map((meeting, index) => (
        <MeetingCard key={index + "key"} meeting={meeting} />
      ))}
    </MeetingCardContainer>
  );
}
