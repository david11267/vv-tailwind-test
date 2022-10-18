import React, { Component } from "react";

export default class ScrollingText extends Component {
  render() {
    return (
      
        <h1 className="overflow-hidden text-6xl">
          <a className="scroll-text">{this.props.text}</a>
        </h1>
    );
  }
}
