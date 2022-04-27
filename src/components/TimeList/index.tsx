import TimeItem from "./components/TimeItem";
import {
  Container,
  InlineContainer,
  StyledSubtitle,
  StyledTitle,
  TimeContainer,
} from "./styles";
import { ReactComponent as Clock } from "../../assets/clock.svg";
import Time from "../../types/time";

interface TimeListProps {
  times: Time[];
  selectedTime?: Time;
  duration?: number;
  onChange?: (time: Time) => void;
}

const TimeList = ({
  times,
  onChange,
  selectedTime,
  duration,
}: TimeListProps) => (
  <Container>
    <StyledTitle>Select a time </StyledTitle>

    <InlineContainer>
      <InlineContainer>
        <Clock />
      </InlineContainer>

      {duration && <StyledSubtitle>{duration} min</StyledSubtitle>}
    </InlineContainer>

    <TimeContainer>
      {times.map(({ hours, minutes }: any, index: any) => (
        <TimeItem
          active={
            hours === selectedTime?.hours && minutes === selectedTime?.minutes
          }
          onClick={(e) => {
            e.preventDefault();
            if (onChange) onChange({ hours, minutes });
          }}
          key={index + "key"}
          hours={hours}
          minutes={minutes}
        />
      ))}
    </TimeContainer>
  </Container>
);

export default TimeList;
