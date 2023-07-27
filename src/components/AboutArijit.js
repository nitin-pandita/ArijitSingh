import React from "react";
import card1 from "../img/desktop-wallpaper-arijit-singh.jpg";
import main from "../img/Arijit Singh.jpg";
import card2 from "../img/arijit singh 2.jpg";
import live from "../img/live.jpg";
import { styled } from "styled-components";
// import { About, Description } from "../styles";
import { motion } from "framer-motion";
import { Sliders, Animation, PhotoAnim, LineAnim, fade } from "../Animation";
const AboutArijit = () => {
  return (
    <About variants={Animation} initial="hidden" animate="show">
      <Frame1 variants={Sliders}></Frame1>
      <Frame2 variants={Sliders}></Frame2>
      <Frame2 variants={Sliders}></Frame2>
      <Frame3 variants={Sliders}></Frame3>
      <Frame4 variants={Sliders}></Frame4>
      <div className="main-img">
        <motion.img variants={PhotoAnim} src={main} alt="" />
      </div>
      <div className="container">
        <div className="img-card">
          <motion.img variants={PhotoAnim} src={card1} alt="" />
          <motion.img variants={PhotoAnim} src={card2} alt="" />
        </div>
        <div className="description">
          <motion.h2 variants={fade}>Journey</motion.h2>
          <motion.div variants={LineAnim} className="line"></motion.div>
          <motion.p variants={fade}>
            Arijit's big break in Bollywood came with the song "Phir Mohabbat"
            from the movie "Murder 2" in 2011. The song's success established
            him as a prominent playback singer in the industry. His soulful and
            emotive voice captured the hearts of millions, leading to a series
            of chart-topping hits in Bollywood. Since then, Arijit Singh has
            become one of India's most beloved and versatile playback singers,
            delivering memorable songs across various genres. His ability to
            convey emotions through his voice has earned him a massive fan
            following and numerous awards for his contributions to Indian music.
            Arijit's journey continues to inspire aspiring singers and music
            enthusiasts worldwide.
          </motion.p>
        </div>
      </div>
    </About>
  );
};

// Animation Frame
const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
// styling part
const About = styled(motion.div)`
  display: flex;
  padding: 5rem 10rem;
  min-height: 90vh;
  @media (max-width: 1300px) {
    display: block;
    flex-direction: column;
    padding: 2rem 2rem;
  }
  .main-img {
    height: 76vh;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 1300px) {
      padding: 0;
      img {
        width: 100%;
        padding-bottom: 1rem;
        object-fit: contain;
      }
    }
  }
  .img-card {
    display: flex;
    width: 100%;
    height: 40vh;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin-left: 40px;
    }
    @media (max-width: 1300px) {
      img {
        width: 40%;
      }
    }
  }
  .description {
    padding-left: 4rem;
    h2 {
      color: white;
      text-align: center;
      padding: 1rem;
    }
    .line {
      width: 100%;
      height: 0.5rem;
      background: #23d997;
    }
  }
`;

export default AboutArijit;
