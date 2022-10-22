import React, { Component } from "react";
import HeaderAndText from "../Components/HeaderAndText";
import CallToActionLink from "./CallToActionLink";
import HeaderImageNextPrev from "./HeaderImageNextPrev";
import { useWindowSize } from "../hooks/useWindowSize";

function FullSize({ callToActionHrf, callToActionText }) {
  return (
    <div className="mt-20 mb-80">
      <div className="flex flex-row justify-center">
        <div className="mt-28 mr-20">
          <HeaderAndText
            text1="VÄRMEVERKET"
            text2="VÄRMEVERKET"
            text3="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has ."
          />

          <CallToActionLink href={callToActionHrf} text={callToActionText} />
        </div>
        <div>
          <HeaderImageNextPrev
            src="https://media.gq-magazine.co.uk/photos/5d13a04bb744d364a425653b/1:1/w_1280,h_1280,c_limit/The-Big-Lebowski-hp-GQ-25Feb16_rex_b.jpg"
            alt="image"
            prevText="&#60;/PREVIOUS"
            nextText="NEXT/&#62;"
            prevHref="/"
            nextHref="/"
            imageWidth="450"
          />
        </div>
      </div>
    </div>
  );
}
function Mobile({ callToActionHrf, callToActionText }) {
  return (
    <div className="mt-20 mb-80">
      <div className="flex flex-row justify-center">
        <HeaderImageNextPrev
          src="https://media.gq-magazine.co.uk/photos/5d13a04bb744d364a425653b/1:1/w_1280,h_1280,c_limit/The-Big-Lebowski-hp-GQ-25Feb16_rex_b.jpg"
          alt="image"
          prevText="&#60;/PREVIOUS"
          nextText="NEXT/&#62;"
          prevHref="/"
          nextHref="/"
          imageWidth="450"
        />
      </div>
      <div className=" mt-8 flex justify-center">
        <HeaderAndText
          text1="VÄRMEVERKET"
          text2="VÄRMEVERKET"
          text3="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has ."
        />
      </div>
      <div className="flex justify-center">
        <CallToActionLink href={callToActionHrf} text={callToActionText} />
      </div>
    </div>
  );
}

export default function Constilation(props) {
  const size = useWindowSize();
  return <div>{size.width > 1000 ? <FullSize {...props} /> : <Mobile {...props} />}</div>;
}
