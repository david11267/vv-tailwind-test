import React, { Component } from "react";
import CallToActionLink from "./CallToActionLink";

export default class ExplainingText extends Component {
  render() {
    return (
      <div className="flex justify-center">
        <div className=" flex justify-center mb-80">
          <div>
            <h1 className="sm:text-base md:text-xl xl:text-5xl text-base">
              VARMEVERKET IS A CREATIVE SPACE THAT WORKS WITH PIONEER PROJECTS WHICH ARE POSITIVE TO PEOPLE.
            </h1>
            <h1 className=" mt-5 mb-5 md:m-5 sm:text-base md:text-xl xl:text-5xl text-base">
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
