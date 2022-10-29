import React from "react";

const ScrollingText = ({ text }) => {
  return (
    <h1 className="max-w-full font-bold text-6xl lg:text-[5vw]">
      <a className="relative block h-64 whitespace-nowrap">
        <p className="marquee">
          <span className="block">
            {text}_-_{text}_-_{text}_-_{text}_-_
          </span>
        </p>
        <p className="marquee marquee2">
          <span className="block">
            {text}_-_{text}_-_{text}_-_{text}_-_
          </span>
        </p>
      </a>
    </h1>
  );
};

export default ScrollingText;
