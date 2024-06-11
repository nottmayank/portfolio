import Image from "next/image";
import "../src/app/css/main.css";
import"../src/app/globals.css";
import TypingAnimation from '../src/app/components/type';
import { useState, useEffect } from 'react';
import Head from 'next/head';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBatteryEmpty } from '@fortawesome/free-solid-svg-icons';


export default function Home() {

  const [isClicked, setIsClicked] = useState(false);

  const toggleDiv = () => {
    setIsClicked(!isClicked);
  };


  return (
    <main className="main-container">

    <Head>
        <link rel="icon" href="../favicon.ico?v=2" />
        <title>Mayank Soni</title>
        <meta name="description" content="Hello! I'm Mayank Soni, an 18-year-old enthusiast in the realms of development and design" />
        <meta property="og:title" content="Mayank Soni" />
        <meta property="og:description" content="Hello! I'm Mayank Soni, an 18-year-old enthusiast in the realms of development and design" />
        <meta property="og:url" content="mayank.fyi" />
        <meta name="twitter:title" content="Mayank Soni" />
        <meta name="twitter:description" content="Hello! I'm Mayank Soni, an 18-year-old enthusiast in the realms of development and design" />
      </Head>

  <div className="main">
    <nav>
      <ul className={isClicked ? "active" : "hamburger2"}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="mailto:mayanksoni1701@gmail.com" target="_blank">Contact Me</a></li>
      </ul>

      <a className="hamburger" onClick={toggleDiv}><Image src="/hamburger.svg" alt="profile" width={30} height={30} /></a>
    </nav>

    <div className="info-container"> 
      <div className="info">
        <div className="img-con">
          <Image src="/img/human.png" alt="profile" width={300} height={300} className="img"/>
        </div>

        <div className="info-text">
          <h1>Hi, I'm <span><TypingAnimation /></span></h1>
          <p>Hello! I'm Mayank Soni, an 18-year-old enthusiast in the realms of development and design. My journey began with a spark of curiosity, which gradually evolved into a passion for crafting innovative solutions and captivating designs. Currently, I'm pursuing my Bachelor's in Computer Applications (BCA), fueling my eagerness to learn, create, and share my work with the world.</p>

          <div className="social">
            <a href="https://x.com/mayanksoni45" target="_blank"><Image src="/twitter.svg" alt="profile" width={30} height={30} /></a>
            <a href="#" ><Image src="/linkedin.svg" alt="profile" width={30} height={30} /></a>
            <a href="https://instagram.com/_mayanksoniii" target="_blank"><Image src="/instagram.svg" alt="profile" width={30} height={30} /></a>
            <a href="mailto:mayanksoni1701@gmail.com" target="_blank"><Image src="/email.svg" alt="profile" width={30} height={30} /></a>
            <a href="https://github.com/nottmayank" target="_blank"><Image src="/github.svg" alt="profile" width={30} height={30} /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

  );
}
