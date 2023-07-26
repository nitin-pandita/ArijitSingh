import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
const Wave = () => {
  return (
    <WaveSvg
      viewBox="0 0 1451 348"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1 }}
        d="M5 113C45.1667 261.5 242 489 708 211C1174 -67.0001 1394.5 -3.5001 1446.5 62.9999"
        stroke="#D96ED4"
        stroke-width="8"
      />
    </WaveSvg>
  );
};

// ? styled components Section
const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: 1;
`;

export default Wave;
