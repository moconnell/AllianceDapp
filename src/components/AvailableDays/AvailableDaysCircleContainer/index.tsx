import "./styles.css";
import React from "react";

export default class AvailableDaysButton extends React.Component {
  constructor(props) {
    super(props);
    this.clickInput = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      active: false,
    };
  }

  handleClick = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  render() {
    return (
      <div className="circle-wrapper">
        <div
          ref={this.clickInput}
          className={
            this.state.active ? "name-wrapper-clicked" : "name-wrapper"
          }
        >
          <span
            ref={this.clickInput}
            onClick={this.handleClick}
            className={this.state.active ? "clicked-dot" : "dot"}
          ></span>
          {this.props.name}
        </div>
      </div>
    );
  }
}
