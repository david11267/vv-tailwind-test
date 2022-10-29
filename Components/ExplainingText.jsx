import React, { useEffect, useRef, useState } from "react";
import CallToActionLink from "./CallToActionLink";

const textClass = "text-black text-opacity-80";
const textClassAbs = "absolute overflow-hidden whitespace-nowrap top-0 left-0";

const ExplainingText = ({ rows, prompt, topOffset = 0 }) => {
  const containerRef = useRef();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const callback = () => {
      const container = containerRef.current?.getBoundingClientRect();
      setScrollY(
        container.top - topOffset - container.height < 0
          ? Math.abs(container.top - topOffset - container.height) * 4
          : 0
      );
    };
    window.addEventListener("scroll", callback);

    return () => {
      window.removeEventListener("scroll", callback);
    };
  }, [topOffset]);

  return (
    <div ref={containerRef} className="flex justify-center">
      <div className="flex justify-center">
        <div className="font-GtAmerica">
          <h1 className="xl:text-6xl md:text-4xl text-xl">
            {rows?.map((row, index) => (
              <div key={index} className="relative">
                <div
                  style={{
                    maxWidth: Math.max(scrollY - 450 * index, 0),
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className={textClassAbs}
                >
                  {row}
                </div>
                <div className={textClass}>{row}</div>
              </div>
            ))}
          </h1>
          {prompt && (
            <h1 className="xl:text-6xl md:text-4xl text-xl lg:text-center md:mt-12 mt-8">
              {prompt.left}
              <span className="font-bold">{prompt.right}</span>
            </h1>
          )}
          <div className="flex justify-center">
            <CallToActionLink text="APPLY NOW" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplainingText;
