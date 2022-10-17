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

export default function Home() {
  return (
    <main className="ml-20 mr-20">
      <div>
        <NavBar />
        <HeroText />
        <Footer />
        <CallToActionLink text="APPLY NOW!" />
        <Constilation />
        <div>
          <SpaceCard indexNr={"#001"} bigHeader="VV" littleHeader="Värmeverket" width="40" height="40" />
        </div>
      </div>
    </main>
  );
}
