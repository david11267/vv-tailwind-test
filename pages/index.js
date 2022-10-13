import Head from "next/head";
import Image from "next/image";
import CallToActionLink from "../Components/CallToActionLink";
import Footer from "../Components/Footer";
import HeroText from "../Components/HeroText";
import Icon from "../Components/Icon";
import NavBar from "../Components/NavBar";
import HeaderAndText from "../Components/HeaderAndText";
import styles from "../styles/Home.module.css";
import HeaderImageNextPrev from "../Components/HeaderImageNextPrev";

export default function Home() {
  return (
    <main className="ml-20 mr-20">
      <div>
        <NavBar />
        <HeroText />
        <Footer />
        <CallToActionLink text="APPLY NOW!" />
        <HeaderAndText
          text1="SILLY."
          text2="LABS."
          text3="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <HeaderImageNextPrev
          src="https://media.gq-magazine.co.uk/photos/5d13a04bb744d364a425653b/1:1/w_1280,h_1280,c_limit/The-Big-Lebowski-hp-GQ-25Feb16_rex_b.jpg"
          alt="image"
          prevText="&#60;/PREVIOUS"
          nextText="NEXT/&#62;"
          prevHref="/"
          nextHref="/"
        />
      </div>
    </main>
  );
}
