import Meeting from "../../types/meeting";
import MeetingCard from "../MeetingCard";
import { MeetingCardContainer } from "./styles";

interface MeetingCardListProps {
  meetings: Meeting[];
}

const MeetingCardList = ({ meetings }: MeetingCardListProps) => {
  return (
    <MeetingCardContainer>
      {meetings.map((meeting, index) => (
        <MeetingCard key={index + "key"} meeting={meeting} />
      ))}
    </MeetingCardContainer>
  );
};

export default MeetingCardList;
