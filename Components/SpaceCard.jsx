import React, { Component } from "react";
export default class SpaceCard extends Component {
  render() {
    return (
      <div className="spaceCardAnimation block h-fit w-fit border border-white">
        <div className="w-40 h-40">
          <span className="text-xs">{this.props.indexNr}</span>
          <div className=" mt-4 h-fit text-center w-full align-middle">
            <h2 className="text-4xl">{this.props.bigHeader}</h2>
            <p className="">{this.props.littleHeader}</p>
            <p className=" mt-3 text-xs">summ text</p>
          </div>
        </div>
      </div>
    );
  }
}
