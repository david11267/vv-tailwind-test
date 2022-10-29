import { useState, useEffect, useCallback } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
const poweredByPlaceholderData = [
  {
    imageSrc:
      "https://uploads-ssl.webflow.com/622762e08d276c4648e1fffa/624db36a933c69aaadcf901a_Group%201590.jpeg",
    headerText1: "SILLY.",
    headerText2: "LABS.",
    textParagraph:
      "Silly Labs is a creative collective of minds founded bt Eren Saygin and Kris Adamah with ethos coming from their background in music.",
  },
  {
    imageSrc:
      "https://www.akadeum.com/wp-content/uploads/2020/11/iStock-1224413537-scaled.jpg.webp",
    headerText1: "TEST.",
    headerText2: "LABS.",
    textParagraph:
      "Test labs is a creative collective of minds founded bt Eren Saygin and Kris Adamah with ethos coming from their background in music.",
  },
];

const HeaderImageNextPrev = ({
  // src,
  alt,
  classNameTextDiv,
  prevHref,
  nextHref,
  prevText,
  nextText,
  header1,
  header2,
  setItem,
}) => {
  const size = useWindowSize();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((s) =>
      s === poweredByPlaceholderData.length - 1 ? 0 : s + 1
    );
    setItem((s) => ({
      ...s,
      index: s.index === s.maxLength ? 0 : s.index + 1,
    }));
  }, [setItem]);

  const previous = () => {
    setCurrentIndex((s) =>
      s === 0 ? poweredByPlaceholderData.length - 1 : s - 1
    );
    setItem((s) => ({
      ...s,
      index: s.index === 0 ? s.maxLength : s.index - 1,
    }));
  };

  useEffect(() => {
    const callback = () => {
      next();
    };
    const clear = setInterval(callback, 5000);

    return () => {
      clearInterval(clear);
    };
  }, [currentIndex, next]);

  return (
    <>
      <div className={classNameTextDiv + " mb-4 z-10"}>
        <h1 className="text-3xl lg:text-5xl font-GtAmericaExtended">
          {header1}
        </h1>
        <h1 className="text-3xl lg:text-5xl font-semibold font-GtAmericaExpandedBlack">
          {header2}
        </h1>
      </div>
      <div>
        <div className="h-72 lg:h-96 overflow-hidden">
          <div
            className="w-full h-full"
            style={{
              transitionDuration: "1200ms",
              transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)",
              transform: `translateY(-${
                (size.width >= 1024 ? 384 : 288) * currentIndex
              }px)`,
            }}
          >
            {poweredByPlaceholderData
              .map((item) => item.imageSrc)
              .map((src, index) => (
                <div className="w-full h-full" key={src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover"
                    src={src}
                    alt={alt}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <button
            type="button"
            onClick={() => {
              previous();
            }}
            href={prevHref}
          >
            {prevText}
          </button>
          <button
            type="button"
            onClick={() => {
              next();
            }}
            href={nextHref}
          >
            {nextText}
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderImageNextPrev;
