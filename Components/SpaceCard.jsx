import React, { Component } from "react";
export default class SpaceCard extends Component {
  render() {
    return (
      <div className="spaceCardAnimation block h-fit w-fit border border-white">
        <div className={`w-${this.props.width} h-${this.props.height}`}>
          <span>{this.props.indexNr}</span>
          <div className="h-fit text-center w-full align-middle">
            <h2 className="">{this.props.bigHeader}</h2>
            <p >{this.props.littleHeader}</p>
            <p>summ text</p>
          </div>
        </div>
      </div>
    );
  }
}
