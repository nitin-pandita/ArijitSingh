import React from "react";
import { motion } from "framer-motion";
import { styled } from "styled-components";

const Heart = () => {
  return (
    <WaveSvg
      width="450"
      height="450"
      viewBox="0 0 2159 1891"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        animate={{ pathLength: 1, pathOffset: 0 }}
        initial={{ pathLength: 0, pathOffset: 1 }}
        transition={{ duration: 2 }}
        d="M1254.5 1879.5C1466.67 1669.67 1775.87 1190.9 2007.87 800.5C2297.87 312.5 2055.98 144.5 1928.98 80.4996C1801.98 16.4996 1579.49 15.9998 1320.61 179.894C1074.15 335.919 1062.16 717.333 1120.99 946C1051.16 495.667 784.4 -295.5 276 142.5C-232.4 580.5 111.667 997.333 380 1132.5L1263.5 1879.5"
        stroke="#D96ED4"
        stroke-width="28"
      />
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
  position: absolute;
  top: 10%;
  right: 20%;
  z-index: 1;
`;

export default Heart;
