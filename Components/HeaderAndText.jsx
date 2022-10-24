import React, { Component } from "react";

export default class headerAndText extends Component {
  render() {
    return (
      <div className=" w-80 block">
        <div className="font-">
          <span className="text-3xl font-thin">{this.props.text1}</span>
          <span className="text-3xl font-bold">{this.props.text2}</span>
        </div>
        <p>{this.props.text3}</p>
      </div>
    );
  }
}
