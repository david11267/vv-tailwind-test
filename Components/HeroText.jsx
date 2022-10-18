import React, { Component } from "react";
export default class HeroText extends Component {
  heroWords = ["Family", "Friends", "Work", "Fun"];
  render() {
    return (
      <div className="flex justify-center mb-80">
        <div className="text-center flex">
          <span className="text-7xl font-thin">PIONEERS.</span>
          <span className="text-7xl font-bold">TOGETHER.</span>
        </div>
        
      </div>
    );
  }
}
