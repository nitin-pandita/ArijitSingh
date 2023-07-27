import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
const SocialWave = () => {
  return (
    <WaveSvg
      viewBox="0 0 1440 267"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1 }}
        d="M-3 135.5C129.667 229.333 470.5 364.7 732.5 139.5C994.5 -85.7004 1314.67 22.6664 1442 105"
        stroke="#23D99C"
        stroke-width="9"
      />
    </WaveSvg>
  );
};

// ? styled components Section
const WaveSvg = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

export default SocialWave;
