import React from "react";
import SpaceCard from "./SpaceCard";

const data = [
  {
    header: "Pc",
    subHeader: "Panncentralen",
    info: "Title? Work? What?",
  },
  {
    header: "Mu",
    subHeader: "Musikverket",
    info: "Title? Work? What?",
  },
  {
    header: "VV",
    subHeader: "Värmeverket",
    info: "Title? Work? What?",
  },
  {
    header: "VV",
    subHeader: "Värmeverket",
    info: "Title? Work? What?",
  },
  {
    header: "VV",
    subHeader: "Värmeverket",
    info: "Title? Work? What?",
  },
  {
    header: "VV",
    subHeader: "Värmeverket",
    info: "Title? Work? What?",
  },
  {
    header: "VV",
    subHeader: "Värmeverket",
    info: "Title? Work? What?",
  },
  {
    header: "VV",
    subHeader: "Värmeverket",
    info: "Title? Work? What?",
  },
  {
    header: "VV",
    subHeader: "Värmeverket",
    info: "Title? Work? What?",
  },
  {
    header: "VV",
    subHeader: "Värmeverket",
    info: "Title? Work? What?",
  },
];

const SpacesCardContainer = () => {
  return (
    <div className="mb-20">
      <div id="spaces" className="flex flex-col mb-10">
        <span className="text-4xl">OUR.</span>
        <span className="text-4xl font-bold">SPACES.</span>
      </div>
      <div className="w-full grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 gap-4 md:grid-cols-2 grid-cols-2">
        {data.map((item, index) => (
          <SpaceCard
            key={index}
            number={`#${String(index).padStart(3, "0")}`}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default SpacesCardContainer;
