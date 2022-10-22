import React, { Component } from "react";

export default class CallToActionLink extends Component {
  render() {
    return (
      <div>
        <a className="font-bold underline sm:text-base md:text-xl xl:text-5xl text-text-4xl" href={this.props.href}>
          {this.props.text}
        </a>
      </div>
    );
  }
}
