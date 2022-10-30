import { useState } from "react";
import Footer from "../Components/Footer";
import HeroText from "../Components/HeroText";
import NavBar from "../Components/NavBar";
import Constilation from "../Components/Constilation";
import ScrollingText from "../Components/ScrollingText";
import BgSwirlVideo from "../Components/BgSwirlVideo";
import ExplainingText from "../Components/ExplainingText";
import SpacesCardContainer from "../Components/SpacesCardContainer";
import Modal from "../Components/Modal";
import { useModalContext } from "../Components/ModalContextProvider";
import { AnimatePresence, motion } from "framer-motion";

const layoutClass = "p-8 m-auto max-w-7xl";

const poweredByPlaceholderData = [
  {
    srcList: [
      "https://images.unsplash.com/photo-1666887360361-d4e8487f0026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1667094793050-e3c15d0eea36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1666831268439-376e34c4de0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
    headerText1: "SILLY.",
    headerText2: "LABS.",
    textParagraph:
      "Silly Labs is a creative collective of minds founded bt Eren Saygin and Kris Adamah with ethos coming from their background in music.",
  },
  {
    srcList: [
      "https://images.unsplash.com/photo-1666831268439-376e34c4de0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1667118715166-ae0c682ed6f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
    headerText1: "TEST.",
    headerText2: "LABS.",
    textParagraph:
      "Test labs is a creative collective of minds founded bt Eren Saygin and Kris Adamah with ethos coming from their background in music.",
  },
  {
    srcList: [
      "https://www.akadeum.com/wp-content/uploads/2020/11/iStock-1224413537-scaled.jpg.webp",
      "https://uploads-ssl.webflow.com/622762e08d276c4648e1fffa/624db36a933c69aaadcf901a_Group%201590.jpeg",
    ],
    headerText1: "TEST.",
    headerText2: "LABS.",
    textParagraph:
      "Test labs is a creative collective of minds founded bt Eren Saygin and Kris Adamah with ethos coming from their background in music.",
  },
];

const exploreOurPlaceholderData = [
  {
    srcList: [
      "https://uploads-ssl.webflow.com/622762e08d276c4648e1fffa/624db36a933c69aaadcf901a_Group%201590.jpeg",
      "https://www.akadeum.com/wp-content/uploads/2020/11/iStock-1224413537-scaled.jpg.webp",
    ],
    headerText1: "TILL",
    headerText2: "VERKET",
    textParagraph:
      "The space is decorated with a CNC printer, 3D printers, sewing machines and is a perfect place to work with everything from electronics to furniture and fashion, the possibilities are endless.",
  },
  {
    srcList: [
      "https://uploads-ssl.webflow.com/622762e08d276c4648e1fffa/624db36a933c69aaadcf901a_Group%201590.jpeg",
      "https://www.akadeum.com/wp-content/uploads/2020/11/iStock-1224413537-scaled.jpg.webp",
    ],
    headerText1: "TEST.",
    headerText2: "LABS.",
    textParagraph:
      "Test labs is a creative collective of minds founded bt Eren Saygin and Kris Adamah with ethos coming from their background in music.",
  },
];

const madeAtPlaceholderData = [
  {
    srcList: [
      "https://uploads-ssl.webflow.com/622762e08d276c4648e1fffa/624db36a933c69aaadcf901a_Group%201590.jpeg",
      "https://www.akadeum.com/wp-content/uploads/2020/11/iStock-1224413537-scaled.jpg.webp",
    ],
    headerText1: "TILL",
    headerText2: "VERKET",
    textParagraph:
      "The space is decorated with a CNC printer, 3D printers, sewing machines and is a perfect place to work with everything from electronics to furniture and fashion, the possibilities are endless.",
  },
  {
    srcList: [
      "https://uploads-ssl.webflow.com/622762e08d276c4648e1fffa/624db36a933c69aaadcf901a_Group%201590.jpeg",
      "https://www.akadeum.com/wp-content/uploads/2020/11/iStock-1224413537-scaled.jpg.webp",
    ],
    headerText1: "TEST.",
    headerText2: "LABS.",
    textParagraph:
      "Test labs is a creative collective of minds founded bt Eren Saygin and Kris Adamah with ethos coming from their background in music.",
  },
];

export default function Home() {
  const { isOpen } = useModalContext();

  const [currentData1, setCurrentData1] = useState({
    maxLength: poweredByPlaceholderData.length - 1,
    index: 0,
  });
  const [currentData2, setCurrentData2] = useState({
    maxLength: exploreOurPlaceholderData.length - 1,
    index: 0,
  });
  const [currentData3, setCurrentData3] = useState({
    maxLength: exploreOurPlaceholderData.length - 1,
    index: 0,
  });

  return (
    <>
      <BgSwirlVideo source="https://hypermedia.varmeverket.com/73_at_24s.mp4" />
      <NavBar />
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Modal />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <main>
              <div className="md:-mt-40 -mt-32">
                <HeroText
                  rotatingWordList={[
                    "Family",
                    "Friends",
                    "Work",
                    "Fun",
                    "Pioneers",
                  ]}
                  rightText="TOGETHER"
                />
              </div>
              <div className={layoutClass + " mb-40"}>
                <ExplainingText
                  prompt={{
                    left: "ARE YOU A FUTURE.",
                    right: "PIONEER?",
                  }}
                  rows={[
                    "VARMEVERKET IS A CREATIVE",
                    "SPACE THAT WORKS WITH",
                    "PIONEER PROJECTS WHICH",
                    "ARE POSITIVE TO PEOPLE",
                  ]}
                />
              </div>
              <div className={layoutClass} id="community">
                <Constilation
                  imageHeader1="POWERED.BY."
                  imageHeader2="VÄRMEVERKET."
                  callToActionHref="/"
                  callToActionText="APPLY NOW!"
                  setItem={setCurrentData1}
                  items={poweredByPlaceholderData}
                  {...poweredByPlaceholderData[currentData1.index]}
                />
              </div>
              <HeroText
                rotatingWordList={["Värme", "Musik", "Konst", "Podd"]}
                rightText="VERKET"
                disableSeparator
              />
              <div className={layoutClass + " mb-40"}>
                <ExplainingText
                  rows={[
                    "VÄRMEVEVERKET FOCUSES ON",
                    "EDUCATION, CREATION &",
                    "INNOVATION WITHIN ART AND",
                    "CULTURE.",
                  ]}
                />
              </div>
              <div className={layoutClass + " mb-40"}>
                {/* <Constilation
                  imageHeader1="EXPLORE.OUR."
                  imageHeader2="SPACES."
                  callToActionText="BOOK A SPACE"
                  imageSrc="https://www.akadeum.com/wp-content/uploads/2020/11/iStock-1224413537-scaled.jpg.webp"
                  headerText1="TILL"
                  headerText2="VERKET"
                  textParagraph="The space is decorated with a CNC printer, 3D printers, sewing machines and is a perfect place to work with everything from electronics to furniture and fashion, the possibilities are endless."
                  setItem={setCurrentData2}
                  items={exploreOurPlaceholderData}
                  {...exploreOurPlaceholderData[currentData2.index]}
                /> */}
                <div className="mt-20">
                  <SpacesCardContainer />
                </div>
              </div>
              <ScrollingText text="BOOK A SPACE!" />
              <div className={layoutClass + " mb-40"}>
                {/* <Constilation
                  imageHeader1="MADE.AT."
                  imageHeader2="VÄRMEVERKET."
                  imageSrc="https://www.akadeum.com/wp-content/uploads/2020/11/iStock-1224413537-scaled.jpg.webp"
                  callToActionText="BOOK A SPACE"
                  headerText1="H"
                  headerText2="&#38;M"
                  textParagraph="The space is decorated with a CNC printer, 3D printers, sewing machines and is a perfect place to work with everything from electronics to furniture and fashion, the possibilities are endless."
                  setItem={setCurrentData3}
                  items={madeAtPlaceholderData}
                  {...madeAtPlaceholderData[currentData3.index]}
                /> */}
              </div>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
