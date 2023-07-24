import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import services from '../img/services.jpg'
import { faFire, faHeartCircleCheck, faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
const Services = () => {
    return (
        <div className='services'>
            <div className="description">
                <h2>Feel the</h2> <span>music</span>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faHeartPulse} size='3x' />
                            <h3>Amazing Voice</h3>
                        </div>
                        <p>He make the people heartbeat stop with his amazing voice</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faMusic} size='3x' />
                            <h3>Amazing Music</h3>
                        </div>
                        <p>Stunning voice with amazing music</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faHeartCircleCheck} size='3x' />
                            <h3>Vocals</h3>
                        </div>
                        <p>Never forget the vocals of this amazing man</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faFire} size='3x' />
                            <h3>FreeStyle voice</h3>
                        </div>
                        <p>His Freestyle voice so beautiful makes everyone day</p>
                    </div>
                </div>
                <div className="image">
                    <img src={services} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Services;