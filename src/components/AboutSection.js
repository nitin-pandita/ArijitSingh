import React from 'react'
import home from '../img/home.jpg'
import { styled } from 'styled-components'

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>The One and Only</h2>
                    </Hide>
                    <Hide>
                        <h2>Melodies <span>Arijit Singh</span></h2>
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
const About = styled.div`
    min-height : 90vh;
    display : flex;
    align-items: center;
    justify-content: space-between;
    padding : 5rem 10rem;
    color : white; 
    

`;

const Description = styled.div`
    padding-right: 5rem;
    flex: 1;
    h2 {
        font-weight: lighter;
    }
`

const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`
const Hide = styled.div`
    overflow: hidden;

`


export default AboutSection;
