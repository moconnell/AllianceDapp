import DayOfWeek from "../../types/dayOfWeek";
import Meeting from "../../types/meeting";
import { getMeridian } from "../../utils/formatDate";
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
    <DateText>{`${DayOfWeek[date.getDay()]} ${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${getMeridian(
      date.getHours(),
      date.getMinutes()
    )}-${getMeridian(endDate.getHours(), endDate.getMinutes())}`}</DateText>
    <Attendee>{attendee}</Attendee>
    <MeetingDescription>{description}</MeetingDescription>
  </CardContainer>
);

export default MeetingCard;
