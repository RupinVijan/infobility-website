import Head from 'next/head'
import Script from 'next/script'
import React from "react";
import styles from '../styles/Home.module.css'
import DarkTheme from "../comp/layouts/Dark"
import Navbar from "../comp/components/navbar/navbar"
import IntroWithSlider from "../comp/components/slider/intro-with-slider"
import Services from '../comp/components/services/services'
import Footer from '../comp/components/footer/footer';
import CallToAction from '../comp/components/call-to-action/call-to-action';
import Blogs2 from '../comp/components/blog/blogs2';
import Clients from '../comp/components/Clients/clients'
// import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  // useEffect(() => {
  //   AOS.init()
  // }, []);

  
 

  React.useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-230912530-1');
    AOS.init()
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [fixedSlider,MainContent,  navbarRef]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Infobility</title>
        <meta name="description" content="Home Page for Infobility Website" />
        <link rel="icon" href="/IB.png" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-230912530-1" />
      <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef}/>
      <div className="main-conten">
      <IntroWithSlider sliderRef={fixedSlider} />
      {/* <div className="main-content"> */}
      <Services style="4item" />
      <Clients  theme="dark" />
      <Blogs2 />
      <CallToAction />
      <Footer />
      </div>
      {/* </div> */}
      </DarkTheme>
      
    </div>
  )
}
