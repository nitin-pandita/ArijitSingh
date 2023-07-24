import React from 'react'

const FaqSection = () => {
    return (
        <div className='faq'>
            <h2>Any Questions? <span>FAQ</span></h2>

            <div className="questions">
                <h4>When was Arijit Singh Born</h4>
                <div className="answer">
                    <p>
                        Arijit Singh was born on April 25, 1987.</p>

                </div>
            </div>
            <div className="questions">
                <h4>What is Arijit Singh's profession?</h4>
                <div className="answer">
                    <p>
                        Arijit Singh is a playback singer and music composer in the Indian music industry.</p>

                </div>
            </div>
            <div className="questions">
                <h4>Where is Arijit Singh from</h4>
                <div className="answer">
                    <p>
                        Arijit Singh was born in Jiaganj, Murshidabad, West Bengal, India</p>

                </div>
            </div>
            <div className="questions">
                <h4>What are some popular songs sung by Arijit Singh?</h4>
                <div className="answer">
                    <p>
                        Arijit Singh has sung numerous popular songs. Some of his famous tracks include "Tum Hi Ho," "Channa Mereya," "Ae Dil Hai Mushkil," "Tera Ban Jaunga," "Muskurane," "Raabta," and many more.</p>

                </div>
            </div>
        </div>
    )
}

export default FaqSection