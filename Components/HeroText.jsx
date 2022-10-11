import React, { Component } from "react";
import TextLoop from "react-text-loop";
export default class HeroText extends Component {
  heroWords = ["Family", "Friends", "Work", "Fun"];
  render() {
    return (
      <div className="flex justify-center">
        <div className="text-center flex">
        <TextLoop
        inte
  children={[
    "Trade faster",
    "Increase sales",
    "Stock winners",
    "Price perfectly",
  ]}
/>
        </div>
      </div>
    );
  }
}
