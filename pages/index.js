import Head from "next/head";
import Image from "next/image";
import Footer from "../Components/Footer";
import Icon from "../Components/Icon";
import NavBar from "../Components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className="ml-20 mr-20">
      <div>
        <NavBar />
        <Footer />
      </div>
    </main>
  );
}
