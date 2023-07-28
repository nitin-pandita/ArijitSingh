import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import { SongDetails } from '../SongDetails';
import { styled } from 'styled-components';
const AboutSong = () => {
  const location = useLocation();
  const url = location.pathname;
  const [songs, setSongs] = useState(SongDetails);
  const [song, setSong] = useState(null);

  useEffect(() => {
    const currentSong = songs.filter((stateSong) => stateSong.url === url);
    setSong(currentSong[0]);
  }, [url, songs]);
  return (
    <>
      {song && (
        <Details>
          <Heading>
            <h1>{song.title}</h1>
            <img src={song.mainImg} alt='' />
          </Heading>
          <Title>
            <h1>Reviews</h1>
            <div className='line'></div>
          </Title>
          <Awards>
            {song.award.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={song.secondaryImg} alt='cover images' />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  color: white;
`;

const Heading = styled.div`
  position: relative;
  padding-top: 20vh;

  h1 {
    display: flex;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 700px) {
    padding-top: 15vh;
  }
`;

// Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className='line'></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

const Awards = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 10rem;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    height: 0.3rem;
    background: #23d997;
    width: 100%;
    margin-top: 2rem;
  }
  p {
    padding: 1rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;
const Title = styled.div`
  color: white;

  h1 {
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
  }
  .line {
    height: 0.3rem;
    background: #23d997;
    width: 100%;
    margin-top: 2rem;
  }
`;
export default AboutSong;
