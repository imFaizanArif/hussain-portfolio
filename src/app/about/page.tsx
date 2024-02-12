import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import AboutHero from '@/components/AboutHero'
import React from 'react'
import AboutDetails from '@/components/AboutDetails'

const About = () => {
    return (
        <>
            <Navbar />
            <AboutHero />
            <AboutDetails />
            <Footer />
        </>
    )
}

export default About