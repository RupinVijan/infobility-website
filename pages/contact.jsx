import React from 'react'
import Head from 'next/head'
import DarkTheme from '../comp/layouts/Dark'
import Navbar from '../comp/components/navbar/navbar'
import ContactHeader from '../comp/components/Contact-header/contact-header'
import ContactForm from '../comp/components/Contact-form/contact-form'
import Footer from '../comp/components/footer/footer'
import ContactForm1 from '../comp/components/Contact-partner/contact-form'
import { useState , useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
    const [Trigger, setTrigger] = useState(0);
    function xyz (Trigger){
        if (Trigger===1){
            document.getElementById("partner").classList.add("hide-abc")
            document.getElementById("contt").classList.remove("hide-abc")
            window.location.hash="contt"
        }
        else if(Trigger===2){
            document.getElementById("partner").classList.remove("hide-abc")
            document.getElementById("contt").classList.add("hide-abc")
            window.location.hash="partner"
        }
    }
    useEffect(() => {
        AOS.init()
        xyz(Trigger)
    }, [Trigger]);
    return (
        <>
        <Head >
        <title>Infobility | Contact</title>
        <meta name="description" content="Contact Page for the InfoBility Website." />
        <link rel="icon" href="/IB.png" />
    </Head>
            <DarkTheme>
            <Navbar />
        <div className="main-conten">
        <ContactHeader first= "Let's talk" second= " about your project with experts." />
            <div id='contt'>

          <ContactForm setTrigger={setTrigger} /> 
            </div>
          <div id='partner' className='hide-abc'>
            <ContactForm1 setTrigger={setTrigger} />
          </div>

          <Footer hideBGCOLOR />
        </div>
            </DarkTheme>
        </>
    )
}
