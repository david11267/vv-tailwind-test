import React, { Component } from "react";
import CallToActionLink from "./CallToActionLink";

export default class ExplainingText extends Component {
  render() {
    return (
      <div className="flex justify-center">
        <div className=" flex justify-center mb-80">
          <div className="w-3/4">
            <h1>VARMEVERKET IS A CREATIVE SPACE THAT WORKS WITH PIONEER PROJECTS WHICH ARE POSITIVE TO PEOPLE.</h1>
            <h1 className=" mt-5 mb-5 md:m-5">
              ARE YOU A FUTUREe.<span className="font-bold">PIONEER?</span>
            </h1>
            <div className="flex justify-center">
              <CallToActionLink text="APPLY NOW!" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
