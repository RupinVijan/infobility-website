import React from 'react'
import Navbar from '../comp/components/navbar/navbar'
// import NavbarFullMenu from '../comp/components/Navbar-full-menu/navbar.full-menu'
import ShowcasesFullScreen from '../comp/components/Showcases-full-screen/showcases-full-screen'
import DarkTheme from '../comp/layouts/Dark'

export default function work() {
    return (
        <>
        <DarkTheme>
            <Navbar />
            {/* <NavbarFullMenu /> */}
            <ShowcasesFullScreen />
        </DarkTheme>
        </>
    )
}
