import React from 'react'
import DarkTheme from '../comp/layouts/Dark'
import Navbar from '../comp/components/navbar/navbar'
import ContactHeader from '../comp/components/Contact-header/contact-header'
import ContactForm from '../comp/components/Contact-form/contact-form'
import Footer from '../comp/components/footer/footer'

export default function Contact() {
    return (
        <>
            <DarkTheme>
            <Navbar />
        <ContactHeader />
        <div className="main-content">
          <ContactForm />

          <Footer hideBGCOLOR />
        </div>
            </DarkTheme>
        </>
    )
}
