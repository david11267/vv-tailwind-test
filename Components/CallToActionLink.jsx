import React, { Component } from "react";

export default class CallToActionLink extends Component {
  render() {
    return (
      <div>
        <a className="font-bold text-4xl underline" href={this.props.href}>
          {this.props.text}
        </a>
      </div>
    );
  }
}
