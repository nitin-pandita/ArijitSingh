import React from 'react'
import home from '../img/home.jpg'
import { About, Description, Hide, Image } from '../styles'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const AboutSection = () => {

    const titleAnim = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 2 } },
    }
    const container = {
        hidden: { x: 100 },
        show: { x: 0, transition: { duration: 0.75 } }

    }
    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2>The One and Only</motion.h2>
                    </Hide>
                    <Hide>
                        <h2>Melodies, <span>Arijit Singh</span></h2>
                    </Hide>
                </motion.div>
                <p>Contact us for any query</p>
                <button>Socials</button>
            </Description>
            <Image>
                <img src={home} alt="Arijit Singh" />
            </Image>
        </About>
    )
}
//? styled component



export default AboutSection;
