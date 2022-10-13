import React, { Component } from "react";

export default class HeaderImageNextPrev extends Component {
  render() {
    return (
      <div className="flex flex-row-reverse mt-40  ">
        <div className=" block w-80 ">
          <div className="relative translate-y-1/2">
            <h1 className="font-thin">POWERD.BY</h1>
            <h1 className="font-bold">VÄRMEVERKET.</h1>
          </div>
          <img className="ml-7" src={this.props.src} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}
