import React from 'react'
import home from '../img/home.jpg'
import { About, Description, Hide, Image } from '../styles'
const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>The One and Only</h2>
                    </Hide>
                    <Hide>
                        <h2>Melodies, <span>Arijit Singh</span></h2>
                    </Hide>
                </div>
                <p>Contact us for any query</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home} alt="Arjit Singh" />
            </Image>
        </About>
    )
}
//? styled component



export default AboutSection;
