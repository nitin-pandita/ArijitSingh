import React from 'react'
import home from '../img/home.jpg'
const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h1>We work to make</h1>
                    </div>
                    <div className="hide">
                        <h1>your <span>dreams</span> come</h1>
                    </div>
                    <div className="hide">
                        <h1>true</h1>
                    </div>
                </div>
                <p>Contact us for any query</p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={home} alt="Arjit Singh" />
            </div>
        </div>
    )
}

export default AboutSection