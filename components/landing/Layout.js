import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            { children}
            <Footer />
        </>
    )
}

export default Layout
