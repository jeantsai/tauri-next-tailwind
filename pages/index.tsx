import Head from "next/head";
import Image from "next/image";
import Header from "../components/oganisms/Header";
import Hero from "../components/oganisms/Hero";
import Interests from "../components/oganisms/Interests";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-zinc-700 h-screen snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Template of TAURI with Next.js & Tailwind</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id="interests" className="snap-center">
        <Interests />
      </section>

      {/* experience */}

      {/* skills */}

      {/* projects */}

      {/* contact */}
    </div>
  );
}
