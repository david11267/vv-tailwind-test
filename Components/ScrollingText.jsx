import React, { Component } from "react";

export default class ScrollingText extends Component {
  render() {
    return (
      <h1 className="truncate overflow-hidden font-bold underline text-8xl">
        <a className="scroll-text">{this.props.text}</a>
      </h1>
    );
  }
}
