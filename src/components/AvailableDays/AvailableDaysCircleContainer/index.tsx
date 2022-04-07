import "./styles.css";
import React from "react";

export default class AvailableDaysButton extends React.Component {
  clickInput: any;
  constructor(props: any) {
    super(props);
    this.clickInput = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      active: false,
    };
  }

  handleClick = () => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'active' does not exist on type 'Readonly... Remove this comment to see the full error message
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="circle-wrapper">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div
          ref={this.clickInput}
          className={
            // @ts-expect-error ts-migrate(2339) FIXME: Property 'active' does not exist on type 'Readonly... Remove this comment to see the full error message
            this.state.active ? "name-wrapper-clicked" : "name-wrapper"
          }
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span
            ref={this.clickInput}
            onClick={this.handleClick}
            // @ts-expect-error ts-migrate(2339) FIXME: Property 'active' does not exist on type 'Readonly... Remove this comment to see the full error message
            className={this.state.active ? "clicked-dot" : "dot"}
          ></span>
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'name' does not exist on type 'Readonly<{... Remove this comment to see the full error message
          {this.props.name}
        </div>
      </div>
    );
  }
}
