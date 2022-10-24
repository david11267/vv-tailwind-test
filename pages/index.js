import Head from "next/head";
import Image from "next/image";
import CallToActionLink from "../Components/CallToActionLink";
import Footer from "../Components/Footer";
import HeroText from "../Components/HeroText";
import Icon from "../Components/Icon";
import NavBar from "../Components/NavBar";
import HeaderAndText from "../Components/HeaderAndText";
import HeaderImageNextPrev from "../Components/HeaderImageNextPrev";
import Constilation from "../Components/Constilation";
import SpaceCard from "../Components/SpaceCard";
import ScrollingText from "../Components/ScrollingText";
import BgSwirlVideo from "../Components/BgSwirlVideo";
import ExplainingText from "../Components/ExplainingText";
import SpacesCardContainer from "../Components/SpacesCardContainer";

export default function Home() {
  return (
    <>
      <BgSwirlVideo source="https://hypermedia.varmeverket.com/73_at_24s.mp4" />
      <div className="flex justify-center">
        <div className="w-5/6">
          <NavBar />

          <main className="flex justify-center">
            <div className="w-5/6 sm:w-full md:w-full lg:w-5/6 xl:w-4/5 2xl:w-2/4">
              <HeroText text1="PIONEERS" text2="TOGETHER" />
              <ExplainingText
                boldEnd="PIONEER?"
                text2="ARE YOU A FUTURE."
                text="VÄRMEVEVERKET IS A CREATIVE SPACE THAT WORKS WITH PIONEER PROJECTS WHICH ARE POSITIVE TO PEOPLE."
              />
              <Constilation
                imageHeader1="POWERD.BY"
                imageHeader2="VÄRMEVEVERKET"
                imageSrc="https://uploads-ssl.webflow.com/622762e08d276c4648e1fffa/624db36a933c69aaadcf901a_Group%201590.jpeg"
                callToActionHref="/"
                callToActionText="APPLY NOW!"
                headerText1="SILLY."
                headerText2="LABS."
                textParagraph="Silly Labs is a creative collective of minds founded bt Eren Saygin and Kris Adamah with ethos coming from their background in music."
              />
              <HeroText text1="VÄRME" text2="VERKET" />
              <ExplainingText
                boldEnd="PIONEER?"
                text2="ARE YOU A FUTURE."
                text="VÄRMEVEVERKET IS A CREATIVE SPACE THAT WORKS WITH PIONEER PROJECTS WHICH ARE POSITIVE TO PEOPLE."
              />
              <Constilation
                imageHeader1="EXPLORE OUR"
                imageHeader2="SPACES"
                imageSrc="https://www.akadeum.com/wp-content/uploads/2020/11/iStock-1224413537-scaled.jpg.webp"
                callToActionText="BOOK A SPACE"
                headerText1="TILL"
                headerText2="VERKETt"
                textParagraph="The space is decorated with a CNC printer, 3D printers, sewing machines and is a perfect place to work with everything from electronics to furniture and fashion, the possibilities are endless."
              />
              <SpacesCardContainer />
            </div>
          </main>
        </div>
      </div>
      <ScrollingText text="BOOK A SPACE-BOOK A SPACE!" />
      <Constilation
        imageHeader1="MADE.AT."
        imageHeader2="VÄRMEVEVERKET"
        imageSrc="https://www.akadeum.com/wp-content/uploads/2020/11/iStock-1224413537-scaled.jpg.webp"
        callToActionText="BOOK A SPACE"
        headerText1="H"
        headerText2="&#38;M"
        textParagraph="The space is decorated with a CNC printer, 3D printers, sewing machines and is a perfect place to work with everything from electronics to furniture and fashion, the possibilities are endless."
      />
      <Footer />
    </>
  );
}
