import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import AboutHero from '@/components/AboutHero'
import React from 'react'
import AboutDetails from '@/components/AboutDetails'
import AboutHighlights from '@/components/AboutHighlights'

const About = () => {
    return (
        <>
            <Navbar />
            <AboutHero />
            <AboutDetails />
            <AboutHighlights />
            <Footer />
        </>
    )
}

export default About