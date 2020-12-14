import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
                {/* <Hero/> */}
            { children }
        </>
    )
}

export default Layout
