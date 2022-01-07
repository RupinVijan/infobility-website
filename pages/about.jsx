import React from 'react'
import Head from 'next/head'
import Navbar from '../comp/components/navbar/navbar'
import DarkTheme from '../comp/layouts/Dark'
import PageHeader from "../comp/components/Pages-header/index"
import Services from '../comp/components/services/services'
import Blogs2 from '../comp/components/blog/blogs2'
import CallToAction from '../comp/components/call-to-action/call-to-action'
import Footer from '../comp/components/footer/footer'
import Team from '../comp/components/Team/team'
import MinimalArea from '../comp/components/Minimal-Area/minimal-area'

export default function About() {
    return (
        <>
        <Head >
        <title>Infobility | About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
        <DarkTheme>
            <Navbar />
            <PageHeader />
            <div className="main-content">
      <Services style="4item" />
      <Blogs2 />
      <Team />
      <MinimalArea />
      <CallToAction />
      <Footer />
      </div>
        </DarkTheme>
        </>
    )
}
