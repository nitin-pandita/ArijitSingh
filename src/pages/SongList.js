import React from "react";
import cover1 from "../img/cover1.jpg";
import cover3 from "../img/cover3.jpg";
import cover4 from "../img/cover4.jpg";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
// Animation
import { motion } from "framer-motion";
import { Sliders, Animation, fade, LineAnim, PhotoAnim } from "../Animation";

const SongList = () => {
  return (
    <Songs
      style={{ background: "#fff" }}
      exit="exit"
      variants={Animation}
      initial="hidden"
      animate="show"
    >
      <Frame1 variants={Sliders}></Frame1>
      <Frame2 variants={Sliders}></Frame2>
      <Frame3 variants={Sliders}></Frame3>
      <Frame4 variants={Sliders}></Frame4>
      <Cover>
        <motion.h2 variants={fade}>Agar tum saath ho</motion.h2>
        <motion.div variants={LineAnim} className="line"></motion.div>
        <Link to="/list/cover1">
          <Hide>
            <motion.img variants={PhotoAnim} src={cover1} alt="" />
          </Hide>
        </Link>
      </Cover>
      <Cover>
        <h2>Ae Dil hai mushkil</h2>
        <div className="line"></div>
        <Link to="/list/cover4">
          <Hide>
            <motion.img variants={PhotoAnim} src={cover4} alt="" />
          </Hide>
        </Link>
      </Cover>
      <Cover>
        <h2>Ve Kamilya</h2>
        <div className="line"></div>
        <Link to="/list/cover3">
          <img src={cover3} alt="" />
        </Link>
      </Cover>
    </Songs>
  );
};
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
const Songs = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  overflow: hidden;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Cover = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #28d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default SongList;
