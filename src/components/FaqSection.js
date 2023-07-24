import React from 'react'
import { About } from '../styles'
import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const FaqSection = () => {
    return (
        <Faq className='faq'>
            <h2>Any Questions? <span>FAQ</span></h2>

            <div className="questions">
                <div className="que">
                    <h4>When was Arijit Singh Born</h4>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className="answer">
                    <p>
                        Arijit Singh was born on April 25, 1987.</p>

                </div>
                <div className="faq-line"></div>
            </div>
            <div className="questions">
                <div className="que">
                    <h4>What is Arijit Singh's profession?</h4>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className="answer">
                    <p>
                        Arijit Singh is a playback singer and music composer in the Indian music industry.</p>

                </div>
                <div className="faq-line"></div>

            </div>
            <div className="questions">
                <div className="que">
                    <h4>Where is Arijit Singh from</h4>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className="answer">
                    <p>
                        Arijit Singh was born in Jiaganj, Murshidabad, West Bengal, India</p>

                </div>
                <div className="faq-line"></div>

            </div>
            <div className="questions">
                <div className="que">
                    <h4>What are some popular songs sung by Arijit Singh?</h4>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className="answer">
                    <p>
                        Arijit Singh has sung numerous popular songs. Some of his famous tracks include "Tum Hi Ho," "Channa Mereya," "Ae Dil Hai Mushkil," "Tera Ban Jaunga," "Muskurane," "Raabta," and many more.</p>

                </div>
                <div className="faq-line"></div>

            </div>
        </Faq>
    )
}
const Faq = styled(About)`
    display: block;

    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background : #ccc;
        height: 0.2rem;
        margin: 2rem 0;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .que {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        h4 {
            font-size: 2.2rem;
        }
    }
    .answer {
        padding : 2rem 0rem;
        p {
            padding: 1rem 0;
        }
    }
`
export default FaqSection