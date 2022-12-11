import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "../../molecules/BackgroundCircle";
import styles from "./Hero.module.css";
import Image from 'next/image';

type Props = {};

function Hero({}: Props) {
  const [text, helper] = useTypewriter({
    words: ["GraalVM", "Kubernetes", "React"],
    loop: true,
  });

  return (
    <div className="text-white flex flex-col space-y-9 text-center items-center justify-center h-screen overflow-hidden">
      <BackgroundCircle />
      <img className="relative rounded-full w-32 h-32 object-cover" src="/images/avatar001.jpg" alt="avatar of jean" />
      <div className="z-20">
        <p className="text-gray-500 text-sm font-serif font-bold uppercase tracking-[9px]">Software Enthusiast</p>
        <h1 className="text-3xl lg:text-5xl mt-3 font-bold z-20">
          <span>I </span>
          <span className="text-rose-500">love </span>
          <span className="text-gray-300">{text}</span>
          <Cursor />
        </h1>
        <div className="mt-3">
          <Link href="#interests">
            <button className={styles.button}>兴趣</button>
          </Link>
          <Link href="#hobbies">
            <button className={styles.button}>爱好</button>
          </Link>
          <Link href="#skills">
            <button className={styles.button}>技能</button>
          </Link>
          <Link href="#projects">
            <button className={styles.button}>项目</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
