import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <motion.div onClick={() => setToggle(!toggle)}>
      <motion.div className="que">
        <motion.div className="title">{title}</motion.div>
        <FontAwesomeIcon icon={toggle ? faMinus : faPlus} />
      </motion.div>
      <motion.div className="que"></motion.div>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
