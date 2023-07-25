import React from 'react'
import card1 from '../img/desktop-wallpaper-arijit-singh.jpg'
import main from '../img/Arijit Singh.jpg'
import card2 from '../img/arijit singh 2.jpg'
import live from '../img/live.jpg'
import { styled } from 'styled-components'
import { About, Description } from '../styles'
import { motion } from 'framer-motion'
import { Animation } from '../Animation'
const AboutArijit = () => {
    return (
        <>
            <AboutArj exit="exit" variants={Animation} initial="hidden" animate="show">
                <div className="main-img">
                    <img src={main} alt="main image" />
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={card1} alt="" />
                        <img src={card2} alt="" />
                    </div>
                    <Des>
                        <h1 >Journey</h1>
                        <div className="line"></div>

                        <p>Arijit's journey to stardom began with his appearance in the reality singing show "Fame Gurukul" in 2005. Although he did not win the competition, it opened doors for him in the music industry. His breakthrough came in 2013 when he sang "Tum Hi Ho" for the Bollywood movie "Aashiqui 2." The song became an instant sensation, catapulting Arijit to fame and establishing him as one of the most sought-after playback singers in the Indian film industry.</p>
                        <p>Since then, Arijit Singh has consistently delivered one chartbuster after another, enchanting audiences with his versatile voice and emotional depth. His ability to convey a wide range of emotions through his singing has earned him a special place in the hearts of music enthusiasts. Whether it's romantic ballads, peppy dance numbers, or soul-stirring melodies, Arijit's voice adds a magical touch to every song he sings.</p>
                    </Des>
                </div>
            </AboutArj>
            <Live>
                <div className="big-img">
                    <img src={live} alt="" />
                </div>
                <div className="description">
                    <h1>Filmfare <span>Awards</span></h1>
                    <div className="line"></div>
                    <p>Arijit Singh is known for his soulful and captivating live performances, and the Filmfare Awards, being one of the most prestigious film awards ceremonies in India, has often featured his talents on its stage.

                        His performances at the Filmfare Awards have been marked by powerful renditions of his hit songs from various Bollywood movies. With his emotive voice and impeccable control over the nuances of each song, Arijit has the ability to transport the audience into a world of emotions.

                        Whether it's a romantic ballad that touches the heart or a peppy track that makes the audience dance along, Arijit Singh's performances at the Filmfare Awards have left a lasting impression on the viewers. His ability to connect with the audience and convey the emotions of the songs he sings has made him a favorite among both fans and critics.

                        Arijit's stage presence, combined with his melodious voice, has made his performances at the Filmfare Awards and other prestigious award ceremonies truly memorable moments for music enthusiasts and Bollywood lovers alike.

                        Since award ceremonies like the Filmfare Awards are live events, the excitement of Arijit Singh's performances can only be truly experienced by those who are present at the venue or watch it live on television. To witness his most recent performances and stay updated on his appearances, it's best to follow his official social media channels and official announcements.</p>
                </div>
            </Live>
        </>

    )
}

const AboutArj = styled(About)`
    .cards {
        display: flex;
        flex-direction: column;
        margin-left:5rem;
    }
    .card {
        display: flex;
        justify-content: space-between;
    }
    .card img {
        width: 40%;
        object-fit: cover;
    }
`
const Des = styled(Description)`
    h1 {
        text-align: center;
        margin: 2rem 0rem;
        color: #23d997;
        font-size: 3.5rem;
    }
        .line {
        height: 0.2rem;
        background: white;
        width: 100%;
    }
`
const Live = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        text-align: center;
        font-size: 2.8rem;
        font-weight: bold;
        color: white;
        padding-bottom: 20px;
    }
    span {
        color: #23d997;

    }
    .line {
        height: 0.2rem;
        background: white;
        width: 100%;
    }
`


export default AboutArijit