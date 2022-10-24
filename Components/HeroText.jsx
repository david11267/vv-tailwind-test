import React, { Component } from "react";
export default class HeroText extends Component {
  heroWords = ["Family", "Friends", "Work", "Fun"];
  render() {
    return (
      <div className="flex justify-center mb-80">
        <div className="text-center flex sm:text-3xl md:text-5xl xl:text-6xl text-xl">
          <span className=" font-GTAmericaExpandedRegular">PIONEERS.</span>
          <span className="font-GtAmericaExpandedBlack">TOGETHER.</span>
        </div>
      </div>
    );
  }
}
