import React from 'react'
import AboutSection from '../components/AboutSection'
import Services from '../components/Services'
import FaqSection from '../components/FaqSection'
import { motion } from 'framer-motion'
import { Animation } from '../Animation'
// ? using this page folder for each page to make it more maintained
const AboutUs = () => {
    return (
        <motion.div exit="exit" variants={Animation} initial="hidden" animate="show">
            <AboutSection />
            <Services />
            <FaqSection />
        </motion.div>
    )
}

export default AboutUs