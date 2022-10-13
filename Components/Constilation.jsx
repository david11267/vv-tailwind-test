import React, { Component } from "react";
import HeaderAndText from "../Components/HeaderAndText";
import HeaderImageNextPrev from "./HeaderImageNextPrev";

export default class Constilation extends Component {
  render() {
    return (
      <div className="mt-20">
        <div className="flex flex-row justify-between">
          <div className="mt-28">
            <HeaderAndText
              text1="VÄRMEVERKET"
              text2="VÄRMEVERKET"
              text3="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has ."
            />
          </div>
          <div>
            <HeaderImageNextPrev
              src="https://media.gq-magazine.co.uk/photos/5d13a04bb744d364a425653b/1:1/w_1280,h_1280,c_limit/The-Big-Lebowski-hp-GQ-25Feb16_rex_b.jpg"
              alt="image"
              prevText="&#60;/PREVIOUS"
              nextText="NEXT/&#62;"
              prevHref="/"
              nextHref="/"
              imageWidth="500"
            />
          </div>
        </div>
      </div>
    );
  }
}
