import React from 'react'
import AboutSection from '../components/AboutSection'
import Services from '../components/Services'
import FaqSection from '../components/FaqSection'
import Navbar from '../components/Navbar'

// ? using this page folder for each page to make it more maintained
const AboutUs = () => {
    return (
        <>
            <AboutSection />
            <Services />
            <FaqSection />
        </>
    )
}

export default AboutUs