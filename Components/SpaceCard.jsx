import React, { Component } from "react";
export default class SpaceCard extends Component {
  render() {
    return (
      <div className=" m-1 spaceCardAnimation h-fit w-fit border border-white ">
        <div className="w-40 h-44">
          <span className="text-xs">{this.props.indexNr}</span>
          <div className=" mt-4 text-center w-full align-middle">
            <h2 className="text-3xl">{this.props.bigHeader}</h2>
            <p className="">{this.props.littleHeader}</p>
            <p className=" mt-3 text-xs">{this.props.tinyText}</p>
          </div>
        </div>
      </div>
    );
  }
}
