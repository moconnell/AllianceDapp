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
      {times.map((value: Time, index: any) => (
        <TimeItem
          active={
            value === selectedTime
          }
          onClick={(e) => {
            e.preventDefault();
            if (onChange) onChange(value);
          }}
          key={index + "key"}
          value={value}
        />
      ))}
    </TimeContainer>
  </Container>
);

export default TimeList;
