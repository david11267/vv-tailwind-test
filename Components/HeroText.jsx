import React, { Component } from "react";
export default class HeroText extends Component {
  heroWords = ["Family", "Friends", "Work", "Fun"];
  render() {
    return (
      <div className="flex justify-center">
        <div className="text-center flex">
          <span className="text-3xl font-thin">TOGETHER.</span>
          <span className="text-3xl font-bold">TOGETHER.</span>
        </div>
      </div>
    );
  }
}
