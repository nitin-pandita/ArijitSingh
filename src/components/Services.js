import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import {
  faFire,
  faHeartCircleCheck,
  faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import services2 from "../img/services2.png";
import { About, Description, Image } from "../styles";
const Services = () => {
  return (
    <Service>
      <Description>
        <h2>
          Special About <span>Arijit Singh</span>
        </h2>
        <Cards className="cards">
          <Card>
            <div className="icon">
              <CustomFontAwesomeIcon icon={faHeartPulse} size="3x" />
              <h3>Amazing Voice</h3>
            </div>
            <p>He make the people heartbeat stop with his amazing voice</p>
          </Card>
          <Card>
            <div className="icon">
              <CustomFontAwesomeIcon icon={faMusic} size="3x" />
              <h3>Amazing Music</h3>
            </div>
            <p>Stunning voice with amazing music</p>
          </Card>
          <Card>
            <div className="icon">
              <CustomFontAwesomeIcon icon={faHeartCircleCheck} size="3x" />
              <h3>Vocals</h3>
            </div>
            <p>Never forget the vocals of this amazing man</p>
          </Card>
        </Cards>
      </Description>
      <Images>
        <img src={services2} alt="" />
      </Images>
    </Service>
  );
};
const Service = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;

    h3 {
      width: 30vh;
      margin-left: 1rem;
      padding: 1rem;
      background: white;
      color: black;
    }
  }
`;

const Images = styled(Image)``;
const CustomFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #23d997;
`;

export default Services;
