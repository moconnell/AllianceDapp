import React from "react";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../AvailableDaysTextContainer' was resolve... Remove this comment to see the full error message
import AvailableDaysText from "../AvailableDaysTextContainer";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../AvailableDaysCircleContainer' was resol... Remove this comment to see the full error message
import AvailableDaysButton from "../AvailableDaysCircleContainer";

export default class AvailableDaysComponent extends React.Component {
  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div style={{ display: "flex", flexDirection: "row" }}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AvailableDaysText></AvailableDaysText>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AvailableDaysButton name="Monday"></AvailableDaysButton>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AvailableDaysButton name="Tuesday"></AvailableDaysButton>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AvailableDaysButton name="Wednesday"></AvailableDaysButton>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AvailableDaysButton name="Thursday"></AvailableDaysButton>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AvailableDaysButton name="Friday"></AvailableDaysButton>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AvailableDaysButton name="Saturday"></AvailableDaysButton>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AvailableDaysButton name="Sunday"></AvailableDaysButton>
      </div>
    );
  }
}
