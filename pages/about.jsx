import React from 'react'
import Head from 'next/head'
import Navbar from '../comp/components/navbar/navbar'
import DarkTheme from '../comp/layouts/Dark'
import CallToAction from '../comp/components/call-to-action/call-to-action'
import Footer from '../comp/components/footer/footer'
import MinimalArea from '../comp/components/Minimal-Area/minimal-area'
import Intro2 from '../comp/components/Intro2/intro2'
import Intro3 from '../comp/components/Intro2/intro3'
import { useState ,useEffect } from 'react'
import ContactHeader from '../comp/components/Contact-header/contact-header'

export default function About() {
    const [GoTo, setGoTo] = useState("");
    function setto(){
        if(GoTo!=""){
            window.location.hash=GoTo
    }
    }
    useEffect(() => {
        setto()
    }, [GoTo]);
    return (
        <>
        <Head >
        <title>Infobility | About</title>
        <meta name="description" content="About Page for InfoBility Website." />
        <link rel="icon" href="/IB.png" />
    </Head>
        <DarkTheme>
            <Navbar />
            <ContactHeader first= '“We work for you in a team”' second= "Infobility success is built upon providing great quality services and on-time delivery."/>
            <div className="main-content">
      {/* <Services style="4item" /> */}
      {/* <Blogs2 /> */}
      {/* <Team /> */}
      <MinimalArea  setTo={setGoTo}/>
      <div id="First">
      <Intro2 imgg="https://image.freepik.com/free-vector/website-development-banner_33099-1687.jpg" topic="Designing Phase"  heading="Front-end Web Development" content="Our team optimizes and develops your website with the latest development languages so that a user can see and interact with them directly. "/>
      </div>
      <div id="Second">
      <Intro3 imgg="https://image.freepik.com/free-photo/programmer-scanning-screen-his-smartwatch-with-smartphone-camera_1098-18710.jpg" topic="Development Phase"  heading="Back-end Web Development" content="Our team focuses primarily on the development of databases, backend logic, APIs and Servers for your business website.  "/>
      </div>
        <div id="Third">
        <Intro2 imgg="https://image.freepik.com/free-vector/seo-analysis-isometric-composition-with-web-optimization-symbols_1284-32010.jpg" topic="Maintenance Phase"  heading="Search Engine Optimization" content="What’s the point of an optimized website if no one can see it? We help our clients in taking their business to another level with Search Engine Optimization. Infobility's strategic approach towards SEO helps Google discover your website. "   />
        </div>
      <CallToAction />
      <Footer />
      </div>
        </DarkTheme>
        </>
    )
}
