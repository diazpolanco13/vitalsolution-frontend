import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import SocialTira from './SocialTira'

const Layout = ({ children }) => {
    return (
        <>
            <SocialTira />
            <Navbar />
            { children}
            <Footer />
        </>
    )
}

export default Layout
