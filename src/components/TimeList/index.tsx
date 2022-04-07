// @ts-expect-error ts-migrate(6142) FIXME: Module './components/TimeItem' was resolved to '/U... Remove this comment to see the full error message
import { TimeItem } from "./components/TimeItem";
import {
  Container,
  InlineContainer,
  StyledSubtitle,
  StyledTitle,
  TimeContainer,
// @ts-expect-error ts-migrate(6142) FIXME: Module './styles' was resolved to '/Users/matthewo... Remove this comment to see the full error message
} from "./styles";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../assets/clock.svg' or its... Remove this comment to see the full error message
import { ReactComponent as Clock } from "../../assets/clock.svg";
export function TimeList({
  times,
  onChange,
  selectedTime,
  duration
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <StyledTitle>Select a time </StyledTitle>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <InlineContainer>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <InlineContainer>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Clock />
        </InlineContainer>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <StyledSubtitle> {duration} min</StyledSubtitle>
      </InlineContainer>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <TimeContainer>
        {times.map(({
          hours,
          minutes,
          seconds
        }: any, index: any) => (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TimeItem
            active={
              hours === selectedTime?.hours && minutes === selectedTime?.minutes
            }
            onClick={(e: any) => {
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
