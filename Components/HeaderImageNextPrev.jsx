import React, { Component } from "react";

export default class HeaderImageNextPrev extends Component {
  render() {
    return (
      <div className="flex flex-row-reverse   ">
        <div className=" block  ">
          <div className={this.props.classNameTextDiv}>

            <h1 className="text-5xl font-GtAmericaExtended">{this.props.header1}</h1>
            <h1 className="text-5xl font-GtAmericaExpandedBlack">{this.props.header2}</h1>
          </div>
          <div className="w-9/12 sm:w-9/12 md:w-auto lg:w-auto xl:w-auto 2xl:w-auto">
            <img src={this.props.src} alt={this.props.alt} />
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
