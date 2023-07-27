import React from "react";
import { motion } from "framer-motion";
import { Animation, titleAnim } from "../Animation";
import { styled } from "styled-components";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heart from "../components/Heart";
import SocialWave from "../components/SocialWave";
const Socials = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={Animation}
      animate="show"
      initial="hidden"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>My socials</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle>
              <FontAwesomeIcon icon={faTwitter} color="#28d99c" size="2x" />
            </Circle>
            <a href="https://twitter.com/nitintwts">Twitter</a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle>
              <FontAwesomeIcon icon={faLinkedin} color="#28d99c" size="2x" />
            </Circle>
            <a href="https://www.linkedin.com/in/nitin-pandita-148070213/">
              Linkedin
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle>
              <FontAwesomeIcon icon={faGithub} color="#28d99c" size="2x" />
            </Circle>
            <a href="https://github.com/nitin-pandita">Github</a>
          </Social>
        </Hide>
      </div>
      {/* <Heart /> */}
      <SocialWave />
    </ContactStyle>
  );
};
const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  position: relative;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  a {
    margin: 2rem;
    font-size: 2.4rem;
    color: black;
  }
`;
export default Socials;
