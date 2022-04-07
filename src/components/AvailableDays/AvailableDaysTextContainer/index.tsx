import "./styles.css";
import React from "react";

export default class AvailableDaysText extends React.Component {
  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="available-days-wrapper">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="available-days-text">Available Days</div>
      </div>
    );
  }
}
