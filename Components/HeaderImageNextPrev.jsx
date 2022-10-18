import React, { Component } from "react";

export default class HeaderImageNextPrev extends Component {
  render() {
    return (
      <div className="flex flex-row-reverse   ">
        <div className=" block  ">
          <div className="relative translate-y-1/2">
            <h1 className="text-5xl font-thin">POWERD.BY</h1>
            <h1 className="text-5xl font-bold">VÄRMEVERKET.</h1>
          </div>
          <div className="ml-20">
            <img width={this.props.imageWidth} src={this.props.src} alt={this.props.alt} />
            <div className="flex justify-between mt-3">
              <a href={this.props.prevHref}>{this.props.prevText}</a>
              <a href={this.props.nextHref}>{this.props.nextText}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
