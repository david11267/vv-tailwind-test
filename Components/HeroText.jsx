import React, { Component } from "react";
export default class HeroText extends Component {
  heroWords = ["Family", "Friends", "Work", "Fun"];
  render() {
    return (
      <div className="flex justify-center mb-80">
        <div className="text-center flex">
          <span className="sm:text-4xl md:text-5xl xl:text-7xl font-thin text-2xl">PIONEERS.</span>
          <span className="sm:text-4xl md:text-5xl xl:text-7xl font-bold text-2xl">TOGETHER.</span>
        </div>
      </div>
    );
  }
}
