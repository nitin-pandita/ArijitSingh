import React from "react";
import AboutArijit from "../components/AboutArijit";
import { motion } from "framer-motion";
import { Animation } from "../Animation";
import Performance from "../components/Performance";
const AboutArj = () => {
  return (
    <motion.div variants={Animation}>
      <AboutArijit />
      <Performance />
    </motion.div>
  );
};

export default AboutArj;
