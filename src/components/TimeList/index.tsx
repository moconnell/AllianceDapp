import { TimeItem } from "./components/TimeItem";
import {
  Container,
  InlineContainer,
  StyledSubtitle,
  StyledTitle,
  TimeContainer,
} from "./styles";
import { ReactComponent as Clock } from "../../assets/clock.svg";
export function TimeList({ times, onChange, selectedTime, duration }) {
  return (
    <Container>
      <StyledTitle>Select a time </StyledTitle>
      <InlineContainer>
        <InlineContainer>
          <Clock />
        </InlineContainer>
        <StyledSubtitle> {duration} min</StyledSubtitle>
      </InlineContainer>
      <TimeContainer>
        {times.map(({ hours, minutes, seconds }, index) => (
          <TimeItem
            active={
              hours === selectedTime?.hours && minutes === selectedTime?.minutes
            }
            onClick={(e) => {
              e.preventDefault();
              onChange({ hours, minutes, seconds });
            }}
            key={index + "key"}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        ))}
      </TimeContainer>
    </Container>
  );
}
