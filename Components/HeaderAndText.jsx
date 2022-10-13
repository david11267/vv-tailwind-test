import React, { Component } from "react";

export default class headerAndText extends Component {
  render() {
    return (
      <div>
        <div>
          <span className="font-thin">{this.props.text1}</span>
          <span className="font-bold">{this.props.text2}</span>
        </div>
        <p>{this.props.text3}</p>
      </div>
    );
  }
}
