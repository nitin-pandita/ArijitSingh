import React from "react";
import Live from "../img/live.jpg";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { PhotoAnim } from "../Animation";
const Performance = () => {
  return (
    <Container>
      <div className="main-img">
        <motion.img
          variants={PhotoAnim}
          initial="hidden"
          animate="show"
          src={Live}
          alt=""
        />
      </div>
      <div className="description">
        <h3>FilFare Awards</h3>
        <div className="line"></div>
        <p>
          Arijit Singh, being one of the most celebrated playback singers in the
          Indian film industry, has had numerous memorable performances at
          various award shows, including the prestigious Filmfare Awards. His
          soulful and melodious voice has made him a favorite among the audience
          and has garnered him many accolades over the years. To find
          information about Arijit Singh's performances at the Filmfare Awards
          or any other award shows beyond September 2021, I recommend checking
          reliable sources like official Filmfare Awards websites, entertainment
          news portals, or Arijit Singh's official social media accounts for the
          latest updates and performance videos. These sources will have
          up-to-date information on his performances and achievements.
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  min-height: 90vh;
  padding: 5rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .main-img {
    width: 100%;
    height: 70vh;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;

    h3 {
      font-size: 3rem;
    }
    .line {
      height: 0.5rem;
      width: 100%;
      background: #28d99c;
      margin: 1rem;
    }
  }
`;

export default Performance;
