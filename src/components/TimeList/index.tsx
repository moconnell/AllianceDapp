import TimeItem from "./components/TimeItem";
import {
  Container,
  InlineContainer,
  StyledSubtitle,
  StyledTitle,
  TimeContainer,
} from "./styles";
import { ReactComponent as Clock } from "../../assets/clock.svg";

interface TimeListProps {
  times: Date[];
  timeZone: string;
  selectedTime?: Date;
  duration?: number;
  onChange?: (time: Date) => void;
}

const TimeList = ({
  times,
  onChange,
  selectedTime,
  duration,
}: TimeListProps) => (
  <Container>
    <StyledTitle>Select a time</StyledTitle>

    <InlineContainer>
      <InlineContainer>
        <Clock />
      </InlineContainer>

      {duration && <StyledSubtitle>{duration} min</StyledSubtitle>}
    </InlineContainer>

    <TimeContainer>
      {times.map((value, index) => (
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
