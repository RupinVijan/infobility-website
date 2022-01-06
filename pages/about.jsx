import React from 'react'
import Navbar from '../comp/components/navbar/navbar'
import DarkTheme from '../comp/layouts/Dark'
import PageHeader from "../comp/components/Pages-header/index"
import Services from '../comp/components/services/services'
import Blogs2 from '../comp/components/blog/blogs2'
import CallToAction from '../comp/components/call-to-action/call-to-action'
import Footer from '../comp/components/footer/footer'

export default function About() {
    return (
        <>
        <DarkTheme>
            <Navbar />
            <PageHeader />
            <div className="main-content">
      <Services style="4item" />
      <Blogs2 />
      <CallToAction />
      <Footer />
      </div>
        </DarkTheme>
        </>
    )
}
