import { motion } from "framer-motion";
import { styled } from "styled-components";
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    align-items: center;
    text-align: center;
  }
`;

export const Description = styled.div`
  padding-right: 5rem;
  flex: 1;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Image = styled(motion.div)`
  flex: 1;
  overflow: hidden;
  z-index: 2;

  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
