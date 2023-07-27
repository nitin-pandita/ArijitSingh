import React from "react";
import home from "../img/home.jpg";
import home2 from "../img/home2.jpg";
import { About, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";
import Wave from "./Wave";
import { fade } from "../Animation";
import { titleAnim } from "../Animation";
import { PhotoAnim } from "../Animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons"; // Import the Twitter icon
import { faX } from "@fortawesome/free-solid-svg-icons";

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
        <motion.p variants={fade}>Follow me on Twitter</motion.p>
        <a href="https://twitter.com/nitintwts">
          <motion.button variants={fade}>
            Twitter{" "}
            <FontAwesomeIcon className="twitter" icon={faTwitter} size="lg" />
            {/* Use faTwitter icon */}
          </motion.button>
        </a>
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
