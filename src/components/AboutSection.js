import React from "react";
import home from "../img/home.jpg";
import home2 from "../img/home2.jpg";
import { About, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";
import Wave from "./Wave";
import { fade } from "../Animation";
import { titleAnim } from "../Animation";
import { PhotoAnim } from "../Animation";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>The One and Only</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Melodies, <span>Arijit Singh</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>Contact us for any query</motion.p>
        <motion.button variants={fade}>Socials</motion.button>
      </Description>
      <Image variants={PhotoAnim}>
        <img src={home2} alt="Arijit Singh" />
      </Image>
      <Wave />
    </About>
  );
};
//? styled component

export default AboutSection;
