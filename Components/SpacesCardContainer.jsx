import React, { Component } from "react";
import HeroText from "./HeroText";
import SpaceCard from "./SpaceCard";
export default class SpacesCardContainer extends Component {
  render() {
    return (
      <div className="flex justify-center mb-20">
        <div className="flex flex-col ">
          <div className="flex flex-col mb-10">
            <span className="text-4xl">OUR.</span>
            <span className="text-4xl font-bold">SPACES.</span>
          </div>
          <div className="flex justify-center flex-wrap mb-80 max-w-4xl">
            <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
            <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
            <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
            <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
            <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
            <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
            <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
            <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
            <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
            <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
          </div>
        </div>
      </div>
    );
  }
}
