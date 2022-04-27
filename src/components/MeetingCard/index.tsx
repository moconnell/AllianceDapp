import Meeting from "../../types/meeting";
import { formatDateTime, formatTime } from "../../utils/formatDate";
import {
  DateText,
  CardContainer,
  MeetingDescription,
  Attendee,
} from "./styles";

interface MeetingCardProps {
  meeting: Meeting;
}

const MeetingCard = ({
  meeting: { date, endDate, attendee, description },
}: MeetingCardProps) => (
  <CardContainer>
    <DateText>
      {formatDateTime(date)}-{formatTime(endDate)}
    </DateText>
    <Attendee>{attendee}</Attendee>
    <MeetingDescription>{description}</MeetingDescription>
  </CardContainer>
);

export default MeetingCard;
