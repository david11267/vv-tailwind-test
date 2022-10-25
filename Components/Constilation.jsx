import React, { Component } from "react";
import HeaderAndText from "../Components/HeaderAndText";
import CallToActionLink from "./CallToActionLink";
import HeaderImageNextPrev from "./HeaderImageNextPrev";
import { useWindowSize } from "../hooks/useWindowSize";

function FullSize({ callToActionHrf, callToActionText, imageSrc, headerText1, headerText2, textParagraph, imageHeader1, imageHeader2 }) {
  return (
    <div className="mt-20 mb-80">
      <div className="flex flex-row justify-center">
        <div className="mt-28 mr-20">
          <HeaderAndText
            text1={headerText1}
            text2={headerText2}
            text3={textParagraph}
          />

          <CallToActionLink href={callToActionHrf} text={callToActionText} />
        </div>
        <div>
          <HeaderImageNextPrev
            src={imageSrc}
            alt="image"
            prevText="&#60;/PREVIOUS"
            nextText="NEXT/&#62;"
            prevHref="/"
            nextHref="/"
            imageWidth="450"
            classNameTextDiv="relative translate-y-1/2 -translate-x-24"
            header1={imageHeader1}
            header2={imageHeader2}
          />
        </div>
      </div>
    </div>
  );
}
function Mobile({ callToActionHrf, callToActionText, imageSrc, headerText1, headerText2, textParagraph, imageHeader1, imageHeader2 }) {
  return (
    <div className="mt-20 mb-80 flex flex-col justify-center">
      <div className="flex flex-row">
        <HeaderImageNextPrev
          src={imageSrc}
          alt="image"
          prevText="&#60;/PREVIOUS"
          nextText="NEXT/&#62;"
          prevHref="/"
          nextHref="/"
          imageWidth="450"
          header1={imageHeader1}
          header2={imageHeader2}
        />
      </div>
      <div className=" mt-8 flex justify-center">
        <HeaderAndText
          text1={headerText1}
          text2={headerText2}
          text3={textParagraph}
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
