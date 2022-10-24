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
      <BgSwirlVideo source="https://hypermedia.varmeverket.com/39.mp4" />
      <div className="flex justify-center">
        <div className="w-5/6">
          <NavBar />

          <main className="flex justify-center">
            <div className="w-5/6 sm:w-full md:w-full lg:w-5/6 xl:w-4/5 2xl:w-2/4">
              <HeroText />
              <ExplainingText
                boldEnd="PIONEER?"
                text2="ARE YOU A FUTURE."
                text="VÄRMEVEVERKET IS A CREATIVE SPACE THAT WORKS WITH PIONEER PROJECTS WHICH ARE POSITIVE TO PEOPLE."
              />
              <Constilation
                callToActionHref="/"
                callToActionText="APPLY NOW!"
              />
              <HeroText />
              <ExplainingText
                boldEnd="PIONEER?"
                text2="ARE YOU A FUTURE."
                text="VÄRMEVEVERKET IS A CREATIVE SPACE THAT WORKS WITH PIONEER PROJECTS WHICH ARE POSITIVE TO PEOPLE."
              />
              <Constilation
                callToActionHrf="www.google.se"
                callToActionText="Hej "
              />
              <SpacesCardContainer />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
